# Notes

## GIT
* customised log
```bash
[alias]
	s = !git status -s
	c = !git add --all && git commit -m
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
```
* [commits standard](https://www.conventionalcommits.org/en/v1.0.0/)
* [hooks](https://github.com/typicode/husky#readme)
* [run linter againsted staged files only](https://github.com/okonet/lint-staged)

## NodeJS
* [ref to natively supported features](https://node.green/)

## Linter
* [rules for JS](https://standardjs.com/rules.html)
* [rules for TS](https://github.com/standard/eslint-config-standard-with-typescript)
* VS Code eslint extension

## Tests
* [jest](https://jestjs.io/)
> use `npx jest --init` for help to create config file
* [jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
### Tips
* sut => system under test