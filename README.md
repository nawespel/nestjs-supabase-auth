# Nestjs with Supabase Auth Integration

The repository presents a very simple integration between the mentioned technologies using concepts found in https://docs.nestjs.com/ 

These concepts include: Middleware, DTOs, Environment Variables, Auth guards, Auth Strategies and Modules.

Swagger documentation includes sign up, sign in and test endpoint under /auth. User first needs to sign up. After signing up, user will need to acquire an access token. Finally, the user can use that access token for future requests.


## Sample .env file
Place the following in the root of the project
```
DATABASE_USER=test
DATABASE_PASSWORD=test
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_KEY=key
SUPABASE_JWT_SECRET=secret
```
## Taking it to production
For this repository to be used well in production, further work needs to be done in the following areas:
- Containerization: dockerizing the codebase would fix the environment and ensure consistency. 
- Error handling: proper error handling to increase the robustness of the service.
- Environment variables: switching to a more secure way of injecting the variables, instead of a file. (e.g. Doppler)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)