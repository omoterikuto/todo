DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=secret
DB_NAME=todo_app
DB_CONN=postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=disable

.PHONY: run
run:
	docker-compose up --build

.PHONY: down
down:
	docker-compose down

.PHONY: start
start:
	docker-compose exec app realize start --run

.PHONY: generate
generate:
	go generate ./...

.PHONY: migrate-create
migrate-create:
	migrate create -ext sql -dir migrations -seq ${FILENAME}

.PHONY: migrate-up
migrate-up:
	docker-compose exec app migrate --source file://migrations --database ${DB_CONN} up 1

.PHONY: migrate-down
migrate-down:
	docker-compose exec app migrate --source file://migrations --database ${DB_CONN} down 1
