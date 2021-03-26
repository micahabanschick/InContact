class Api::V1::Admin::UsersController < ApplicationController

    def index
        @users = User.all
        render json: UserSerializer.new(@users)
    end

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
