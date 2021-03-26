class Api::V1::UsersController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        options = {
            include: [:works, :projects]
        }
        render json: UserSerializer.new(user, options)
    end

    private

    def users_params
        params.require(:user).permit(:name, :password, :email)
    end

end
