import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registration.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registration(dto: RegistrationDto): Promise<any>;
    login(dto: LoginDto): Promise<any>;
    getUsers(): Promise<any>;
}
