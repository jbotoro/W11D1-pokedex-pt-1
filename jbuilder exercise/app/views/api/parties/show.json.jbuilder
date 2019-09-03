json.extract! @party, :name, :guests



# json.gifts @party.guests do |guest|
#   guest.gifts do |gift|
#     json.extract! gift, :title
#   end
# end

json.guests @party.guests do |guest|
  json.name guest.name
  json.gifts guest.gifts, :title
end