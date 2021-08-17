FROM envoyproxy/envoy-alpine:v1.18.3
ARG CONFIG_FILE=envoy.yaml
RUN apk --no-cache add ca-certificates
RUN update-ca-certificates
RUN echo ${CONFIG_FILE}
COPY ${CONFIG_FILE} /etc/envoy/envoy.yaml
ENV ENVOY_UID=0
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace