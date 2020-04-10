import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, array

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'vitor@email.com',
    password: '123',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 50 },
    ],
  });

  return response.json({ message: 'Hello World' });
}
