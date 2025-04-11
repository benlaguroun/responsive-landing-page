import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";

@Module({
  providers: [UsersService],
  exports: [UsersService], // Ensure the service is exported for use in other modules
})
export class UsersModule {}
