import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SupabaseStrategy } from './strategies/supabaseStrategy';

@Module({
    imports: [PassportModule],
    controllers: [AuthController],
    providers: [AuthService, SupabaseStrategy],
    exports: [AuthService, SupabaseStrategy],
})
export class AuthModule {
    
}
