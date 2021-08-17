CONFIG_FILE=envoy.yaml

run.build:
	CONFIG_FILE=${CONFIG_FILE} skaffold build -t latest

run.iam:
	gcloud run services add-iam-policy-binding server \
  --member='serviceAccount:234770780438-compute@developer.gserviceaccount.com' \
  --role='roles/run.invoker'
run.deploy: run.build run.iam
	gcloud beta run deploy --use-http2 --image gcr.io/shorted-dev-aba5688f/gateway:latest gateway

run.destroy:
	gcloud run services delete gateway