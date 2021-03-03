import { theHighestWord } from "../src/the-highest-word"

test("El valor retornado debe ser 'z' con score de 26", () => {
  expect(theHighestWord("a z")).toEqual({ content: 'z', score: 26 })
})

test("El valor retornado debe ser 'c' con score de 2", () => {
  expect(theHighestWord("b b a a a b c")).toEqual({ content: 'c', score: 2 })
})

test("El valor retornado debe ser 'h' con score de 7", () => {
  expect(theHighestWord("a a b c a d e a g a H A E B a")).toEqual({ content: 'H', score: 7 })
})
