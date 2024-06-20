require 'rack'

#bind 'tcp://0.0.0.0:9292'

app = Rack::Builder.new do
  use Rack::Static,
    urls: ["/js"],
    index: 'index.html',
    header_rules: [
      ['/js/', {'Content-Type' => 'text/javascript'}]
    ]

  run do |env|
    [
      200,
      { "Content-Type" => "text/html" },
      File.open('index.html', File::RDONLY)
    ]
  end
end

run app
