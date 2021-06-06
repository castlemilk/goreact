build:
	go build -o bin/backend cmd/backend/main.go
run:
	go run cmd/backend/main.go
generate.swagger:
	statik -f -src=../web/dist/swagger-ui/ -dest=internal/

docker.build:
	docker build . -f cmd/backend/Dockerfile
run.publish:
	docker push gcr.io/shorted-dev-aba5688f/server:afcaa70-dirty
run.deploy:
	gcloud run deploy --image gcr.io/shorted-dev-aba5688f/server:afcaa70-dirty

run.destroy:
	gcloud run services delete server