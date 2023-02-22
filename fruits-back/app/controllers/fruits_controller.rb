class FruitsController < ApplicationController
    def index
        @fruits = Fruit.all.map do |fruit|
            fruit.attributes.merge(distributor_name: fruit.distributor.name)
        end
        render json: @fruits
    end

    def show
        @fruit = Fruit.find(params[:id])
        @distributor_name = @fruit.distributor.name
        puts "=========================="
        puts @fruit.distributor.name
        render json: @fruit.attributes.merge(distributor_name: @distributor_name)
    end
end
