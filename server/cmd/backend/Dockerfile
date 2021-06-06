FROM golang:1.16-buster as builder

WORKDIR /src
ADD go.mod go.sum ./




ADD internal internal
ADD pkg pkg
ADD cmd cmd

# fetch dependencies
RUN go mod tidy && go mod download

ARG VERSION=dev

ARG LDFLAGS="\
  -X pkg.buildinfo.Version=${VERSION} \
  "
ARG SKAFFOLD_GO_GCFLAGS
# build image
RUN go build \
    -ldflags="${LDFLAGS}" \
    -gcflags="${SKAFFOLD_GO_GCFLAGS}" \
    -mod=readonly -v \
    -o /src/app \
    /src/cmd/backend/main.go


FROM gcr.io/distroless/base-debian10
LABEL maintainer="ben.ebsworth@gmail.com"

COPY --from=builder /src/app /
ENV GOTRACEBACK=single
CMD [ "/app" ]