package main

import (
	"log"
	"net/http"
	"os"
	"todoapp/config"
	"todoapp/graph/generated"
	"todoapp/graph/resolver"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

const defaultPort = "8080"

func main() {
	if err := config.InitDB(); err != nil {
		log.Fatal("failed to InitDB")
	}
	// todo いる？
	defer func() {
		if sqlDb, err := config.DB().DB(); err == nil {
			sqlDb.Close()
		}
	}()

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &resolver.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
