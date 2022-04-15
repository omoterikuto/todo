## 環境構築(playgroundを使用するまで)

1. `git clone https://github.com/omoterikuto/todoapp.git`

2. `make run`

3. `make migrate-up`

4. `http://localhost:8080/`でplaygroundを開く


user作成mutaion
```
mutation {
  createUser(input: {name: "newUser"}) {
    id
    name
  }
}
```

todo作成mutaion
```
mutation {
  createTodo(input: {title: "title", userID: 1}) {
    id
    done
    user {
      id
      name
    }
  }
}
```
