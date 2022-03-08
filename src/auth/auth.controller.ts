import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { SupabaseAuthGuard } from "./guards/supabase-auth-guard";

@Controller('auth')
@ApiTags('authentication')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Get('test')
    @UseGuards(SupabaseAuthGuard)
    @ApiBearerAuth('access-token')
    async test(@Headers() headers){
        let x = 1
        return true
    }

    @Post('signIn')
    @ApiOperation({
        summary: 'Acquires an access token',
        description: 'This endpoint will provide an access token.'
    })
    async signIn(@Body() dto: CreateUserDto ){
        return this.authService.signInUser(dto)
    }

    @Post('signUp')
    @ApiOperation({
        summary: 'Signs up the user in the system',
        description: 'This endpoint signs up the user in the system. It will return the user details. You will use this user to interact with the rest of the endpoints.'
    })
    async signUp(@Body() dto: CreateUserDto ){
        return this.authService.signupUser(dto)
    }
}