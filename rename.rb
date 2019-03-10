Dir.glob("**/*.js") do |f|
  ap = File.absolute_path(f)
  bn = File.basename(f)
  pt = ap.gsub(/#{bn}$/, "")
  new_name = bn.gsub(/\.js$/, ".ts")
  new_ap = pt + new_name

  File.rename(ap, new_ap)
end
