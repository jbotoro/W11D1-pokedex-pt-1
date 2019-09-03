# json.set! @guest.id do 
  json.partial! "guest", guest: @guest

  json.gifts @guest.gifts 
  # json.array! @guest.gifts do |gift|
  #   json.extract! gift, :title, :description
  # end
# end
 