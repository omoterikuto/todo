FROM golang:1.18-alpine

WORKDIR go/src/app

COPY . .

RUN go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate@latest

CMD ["go", "run", "main.go"]
