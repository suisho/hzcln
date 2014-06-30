class HomeController < ApplicationController
  def index
    @dummy = Rails.cache.fetch "tumblr_api_cache_2" do
      tumblr_api(0)
    end
  end
  
  def tumblr_api(p=0)
    binding.pry
    client = Tumblr::Client.new
    photo_posts = client.tagged("room", :filter => "text").select do |post|
      post["type"] == "photo"
    end
    photos = photo_posts.map do |p|
      p["photos"][0]["alt_sizes"][0]
    end
  end
end
