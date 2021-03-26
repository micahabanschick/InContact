class Api::V1::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        options = {
            include: [:works, :projects]
        }
        render json: UserSerializer.new(@user, options)
    end

    def create
        @user = User.create(user_params)
        options = {
            include: [:works, :projects]
        }
        render json: UserSerializer.new(@user, options)
    end

    private

    def user_params
        params.require(:user).permit(:name, :password, :email)
    end

end
