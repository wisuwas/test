FROM node:10-alpine as build-env

RUN apk add python make g++ yarn
    
COPY apps /apps

RUN cd /apps \
    && yarn install --pure-lockfile \
    && yarn build \
    && yarn install --production --ignore-scripts --prefer-offline --pure-lockfile

FROM node:10-alpine

RUN addgroup --gid 3002 webadm \
    && adduser --uid 3003 -G webadm -s /bin/sh --disabled-password cmnadpl \
    && echo 'cmnadpl:ostac123' | chpasswd \
    && sed 's/3003/3002115/g' /etc/passwd > /tmp/passwd \
    && mv /tmp/passwd /etc/passwd \
    && chown -R cmnadpl:webadm /home/cmnadpl

# in case, u use linux, u'll need this
RUN ip -4 route list match 0/0 | awk '{print $3 "host.docker.internal"}' >> /etc/hosts

COPY --from=build-env /apps /apps

RUN apk add yarn

RUN apk add tzdata \
    && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
    && echo "Asia/Bangkok" >  /etc/timezone

WORKDIR /apps

#crontab
ADD ./crontab/startup.sh  /startup

ADD ./crontab/cron /etc/crontabs/linkLogFile

RUN chown -R cmnadpl:webadm /apps/session-db-storage

RUN apk add tzdata \
    && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
    && echo "Asia/Bangkok" >  /etc/timezone

RUN crontab -u cmnadpl /etc/crontabs/linkLogFile

RUN chmod u+x /startup

#supervisor
RUN apk add supervisor

COPY nextjs.ini /etc/supervisor.d/nextjs.ini

COPY crontab.ini /etc/supervisor.d/crontab.ini

COPY supervisord.conf /etc/supervisord.conf

RUN mkdir -p /logs/supervisor

# Change owner
COPY conf /conf
COPY logs /logs
RUN chown -R cmnadpl:webadm /conf \
    && chown -R cmnadpl:webadm /logs

#entrypoint
COPY entrypoint.sh  /entrypoint

RUN chmod u+x /entrypoint

CMD [ "/bin/ash", "/entrypoint" ]
