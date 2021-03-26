# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
micah = User.create(name: "micah", password: "micah_password", email: "micah@micah.com", admin: true)
miriam = User.create(name: "miriam", password: "miriam_password", email: "miriam@miriram.com")
mara = User.create(name: "mara", password: "mara_password", email: "mara@mara.com")

micah_work = Work.create(title: "Chairman", organization: "House of Jacks", length: "1970-01-01", user_id: micah.id)
miriam_work = Work.create(title: "Data Analyst", organization: "Job Inc.", length: "1980-06-15", user_id: miriam.id)
mara_work = Work.create(title: "Software Engineer", organization: "Apple", length: "1990-12-30", user_id: mara.id)

in_contact = Project.create(title: "InContact", description: "The portfolio creating toolset every job seeker needs.", demo: "https://github.com/micahabanschick/InContact.git", tools: "React-Redux, Javascript, and Ruby on Rails", length: "1971-01-01", user_id: micah.id)
love_life = Project.create(title: "Love Life", description: "A single page application that helps you track and manage your monthly expenses.", demo: "https://github.com/micahabanschick/Love_Life.git", tools: "Vanilla Javascript and Ruby on Rails", length: "1972-02-02", user_id: miriam.id)
carb_container = Project.create(title: "Carb Container", description: "An open source tool used to store, record, and calculate your diet macro intake.", demo: "https://github.com/micahabanschick/Carb_Container.git", tools: "Ruby on Rails", length: "1973-03-03", user_id: mara.id)