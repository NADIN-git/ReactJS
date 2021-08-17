import { render, screen } from "@testing-library/react";
import Reducer from "./Reducer";
import { changeIsAuthed, changeName, changeViewCheckbox } from './actions'

describe("Reducer", () => {
  const state = {
    surname: "",
    name: "",
    patronymic: "",
    viewCheckbox: false,
    isAuthed: false,
  }
  it('Change isAuthed', () => {
    const action = changeIsAuthed(true)
    const newStateIsAuthed = Reducer(state, action)
    expect(newStateIsAuthed.isAuthed).toBe(true)
    expect(newStateIsAuthed).toMatchSnapshot()
  })
  it('Change viewCheckbox', () => {
    const action = changeViewCheckbox(true)
    const newStateCheckbox = Reducer(state, action)
    expect(newStateCheckbox.viewCheckbox).toBe(true)
    expect(newStateCheckbox).toMatchSnapshot()
  })
  it('Change surname, name, patronymic', () => {
    const action = changeName("Колотилова", "Надежда", "Викторовна")
    const newStateName = Reducer(state, action)
    expect(newStateName.surname).toBe('Колотилова')
    expect(newStateName.name).toBe("Надежда")
    expect(newStateName.patronymic).toBe("Викторовна")
    expect(newStateName).toMatchSnapshot()
  })  
})