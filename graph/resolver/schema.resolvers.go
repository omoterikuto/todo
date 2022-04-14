package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"todoapp/config"
	"todoapp/datamodel"
	"todoapp/graph/generated"
	"todoapp/graph/model"
)

func (r *mutationResolver) CreateTodo(ctx context.Context, input model.NewTodo) (*model.Todo, error) {
	todo := &datamodel.Todo{
		UserID: uint(input.UserID),
		Title:  input.Title,
	}
	if err := config.DB().Create(todo).Error; err != nil {
		return nil, err
	}

	return &model.Todo{
		ID:     int(todo.ID),
		Title:  todo.Title,
		Done:   todo.Done,
		UserID: int(todo.UserID),
	}, nil
}

func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	user := &datamodel.User{
		Name: input.Name,
	}
	if err := config.DB().Create(user).Error; err != nil {
		return nil, err
	}

	return &model.User{
		ID:   int(user.ID),
		Name: user.Name,
	}, nil
}

func (r *queryResolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	var todos []datamodel.Todo
	if err := config.DB().Find(todos).Error; err != nil {
		return nil, err
	}

	var retTodos []*model.Todo
	for _, todo := range todos {
		retTodos = append(retTodos, &model.Todo{
			ID:     int(todo.ID),
			Title:  todo.Title,
			Done:   todo.Done,
			UserID: int(todo.UserID),
		})
	}

	return retTodos, nil
}

func (r *todoResolver) User(ctx context.Context, obj *model.Todo) (*model.User, error) {
	user := &datamodel.User{}
	if err := config.DB().First(user, obj.UserID).Error; err != nil {
		return nil, err
	}

	return &model.User{
		ID:   int(user.ID),
		Name: user.Name,
	}, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// Todo returns generated.TodoResolver implementation.
func (r *Resolver) Todo() generated.TodoResolver { return &todoResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type todoResolver struct{ *Resolver }
