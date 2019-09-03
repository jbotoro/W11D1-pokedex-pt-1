json.extract! @pokemon, :id, :name, :image_url, :attack, :defense, :poke_type, :moves

json.items @pokemon.items do |item|
  json.extract! item, :id
end
# @pokemon.items.each do |item|
