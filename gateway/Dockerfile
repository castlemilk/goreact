FROM envoyproxy/envoy:v1.18.3
COPY envoy.yaml /etc/envoy/envoy.yaml
ENV ENVOY_UID=0
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace