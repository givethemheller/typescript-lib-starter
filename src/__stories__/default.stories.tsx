import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Greeter } from '../greeter'

const theGreeter = new Greeter('hello tot he world')
storiesOf('greeter', module).add('with text', () => (
  <div>{theGreeter.greet()}</div>
))
