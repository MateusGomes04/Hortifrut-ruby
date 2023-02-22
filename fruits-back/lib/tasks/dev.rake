namespace :dev do
  desc "TODO"
  task setup: :environment do
    
    puts "Registrando distribuidores..."

    
    Distributor.create!(
      name: "Frederico Frutas"
    )

    Distributor.create!(
      name: "Tião Frutas"
    )

    puts "Distribuidores registrados!"

    puts "Registrando frutas..."
    10.times do
      Fruit.create!(
        name: Faker::Food.fruits,
        prince: rand(1000),
        image_url: Faker::Avatar.image,
        distributor: Distributor.all.sample
      )
    end
    puts "Frutas registradas!"
  end

end
