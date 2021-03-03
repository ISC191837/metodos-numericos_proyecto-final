import { theHighestWord } from "../src/the-highest-word"

test("El valor retornado debe ser 'z' con score de 26", () => {
  expect(theHighestWord("a z")).toEqual({ content: 'z', score: 26 })
})
