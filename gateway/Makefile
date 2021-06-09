run.publish:
	docker push gcr.io/shorted-dev-aba5688f/gateway:34a19d4-dirty
run.deploy:
	gcloud run deploy --image gcr.io/shorted-dev-aba5688f/gateway:34a19d4-dirty

run.destroy:
	gcloud run services delete gateway