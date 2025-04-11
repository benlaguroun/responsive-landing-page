import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./user/users.module"; // Ensure this path is correct

@Module({
  imports: [AuthModule, UsersModule], // Import UsersModule here
  controllers: [],
  providers: [],
})
export class AppModule {}
