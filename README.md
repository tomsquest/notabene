# NotaBene

Your note taking tool.

## Development

### Front

```bash
cd front
yarn install
yarn start
```

### Back

```bash
cd $GOPATH/go/src/github.com/tomsquest/back
go fmt -s -w ./
go vet
golint
go build
```

## Credits

- [Holy Grails layout](https://philipwalton.github.io/solved-by-flexbox/) from Solved By Flexbox by Philip Walton