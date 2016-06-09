json.array!(@users) do |user|
  json.extract! user, :id, :nick, :password
  json.url user_url(user, format: :json)
end
