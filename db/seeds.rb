# frozen_string_literal: true

Event.destroy_all
Venue.destroy_all
User.destroy_all

@user1 = User.create!(
  {
    username: 'jp',
    email: 'yampi@email.com',
    password: '123456'
  }
)

p "#{User.count} user(s) created"

@venue1 = Venue.create!(
  name: 'Citi Field',
  address: '123-01 Roosevelt Ave.',
  city: 'Flushing',
  state: 'NY',
  zip_code: 11_368
)

p "#{Venue.count} venue(s) created"

@event1 = Event.create!(
  name: 'Mets Game',
  date: '2021-1-1',
  time: '13:00',
  gate: '2A',
  section: 'B',
  row: '3',
  seat: '24',
  ticket_number: 'D8936D',
  description: 'Come enjoy the Mets game!',
  venue: @venue1
)
@event1 = Event.create!(
  name: 'Mets Game',
  date: '2021-1-30',
  time: '18:00',
  gate: '7D',
  section: 'A',
  row: '1',
  seat: '1',
  ticket_number: 'D6723D',
  description: 'Come enjoy the Mets game!',
  venue: @venue1
)

p "#{Event.count} event(s) created"
