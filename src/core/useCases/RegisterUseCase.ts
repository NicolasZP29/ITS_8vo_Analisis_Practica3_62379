import { AuthService } from '../ports/AuthService';

export class RegisterUseCase {
    constructor(private authService: AuthService) {}

    async execute(name: string, email: string, password: string): Promise<boolean> {
        return this.authService.register(name, email, password);
    }
}
