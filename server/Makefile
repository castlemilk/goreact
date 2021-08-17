build:
	go build -o bin/backend cmd/backend/main.go
run:
	go run cmd/backend/main.go
generate.swagger:
	statik -f -src=../web/dist/swagger-ui/ -dest=internal/

docker.build:
	docker build . -f cmd/backend/Dockerfile

run.build:
	skaffold build -t latest
run.publish:
	docker push gcr.io/shorted-dev-aba5688f/server:afcaa70-dirty
run.deploy: run.build
	gcloud beta run deploy --use-http2 --image gcr.io/shorted-dev-aba5688f/server:latest server

run.destroy:
	gcloud run services delete server


test.local.message:
	grpcurl -plaintext -d '{ "id": "1111" }' localhost:8081 goreact.echo.EchoService/Echo

test.cr.message:
	GODEBUG=http2debug=2 grpcurl -d '{ "id": "1111" }' server-ak2zgjnhlq-ts.a.run.app:443 goreact.echo.EchoService/Echo
	
