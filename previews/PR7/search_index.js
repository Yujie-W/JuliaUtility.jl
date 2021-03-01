var documenterSearchIndex = {"docs":
[{"location":"#PkgUtility.jl","page":"Home","title":"PkgUtility.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Utility functions for Julia.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg;\njulia> Pkg.add(\"PkgUtility\");","category":"page"},{"location":"API/#API","page":"API","title":"API","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"CurrentModule = PkgUtility","category":"page"},{"location":"API/#Artifacts","page":"API","title":"Artifacts","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"deploy_artifact\npredownload_artifact","category":"page"},{"location":"API/#PkgUtility.deploy_artifact","page":"API","title":"PkgUtility.deploy_artifact","text":"deploy_artifact(\n            art_toml::String,\n            art_name::String,\n            art_locf::String,\n            art_file::Array{String,1},\n            art_tarf::String,\n            art_urls::Array{String,1};\n            new_file::Array{String,1} = art_file)\ndeploy_artifact(\n            art_toml::String,\n            art_name::String,\n            art_locf::String,\n            art_tarf::String,\n            art_urls::Array{String,1})\n\nDeploy the artifact, given\n\nart_toml Artifact TOML file location\nart_name Artifact name identitfier\nart_locf Local folder that stores artifact files\nart_file Array of artifact file names\nart_tarf Folder location to store artifact TAR file\nart_urls Array of urls to upload the Artifact to\nnew_file Optional. New file names (same as art_file by default)\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.predownload_artifact","page":"API","title":"PkgUtility.predownload_artifact","text":"predownload_artifact(name::String, artifact_toml::String)\n\nDownload the artifact from given server if it does not exist, given\n\nname Artifact name\nartifact_toml Artifacts.toml file location\n\n\n\n\n\n","category":"function"},{"location":"API/#Date","page":"API","title":"Date","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"doy_to_int\nint_to_doy","category":"page"},{"location":"API/#PkgUtility.doy_to_int","page":"API","title":"PkgUtility.doy_to_int","text":"doy_to_int(year::Int, doy::Int)\n\nConvert date to YYYYMMDD format to work with flux tower datasets, given\n\nyear Year with the format of XXXX\ndoy Day of year (typically 1-365, 1-366 for leap years)\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.int_to_doy","page":"API","title":"PkgUtility.int_to_doy","text":"int_to_doy(timestamp::String)\n\nConvert date from YYYYMMDD to day of year, given\n\ntimestamp Time stamp as in flux tower dataset\n\n\n\n\n\n","category":"function"},{"location":"API/#Display","page":"API","title":"Display","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"pretty_display","category":"page"},{"location":"API/#PkgUtility.pretty_display","page":"API","title":"PkgUtility.pretty_display","text":"pretty_display(\n            para::Array{Pair{Union{Any},Union{Any}},1},\n            spaces::String = \" \")\n\nDisplay array of pairs (dictionary) in recursive manner, given\n\npara Parameters to display\nspaces Leading spaces\n\n\n\n\n\n","category":"function"},{"location":"API/#Math","page":"API","title":"Math","text":"","category":"section"},{"location":"API/#Integral-function","page":"API","title":"Integral function","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"numerical∫","category":"page"},{"location":"API/#PkgUtility.numerical∫","page":"API","title":"PkgUtility.numerical∫","text":"numerical∫(f::Array{FT,1}, dx::Array{FT,1}) where {FT<:AbstractFloat}\nnumerical∫(f::Array{FT,1}, dx::FT) where {FT<:AbstractFloat}\n\nA fast way of integrating functions, given\n\nf f(x) for each x\ndx Delta x for each x\n\nNote that f and dx must have the same length\n\n\n\n\n\n","category":"function"},{"location":"API/#Quadratic-solver","page":"API","title":"Quadratic solver","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"lower_quadratic\nupper_quadratic","category":"page"},{"location":"API/#PkgUtility.lower_quadratic","page":"API","title":"PkgUtility.lower_quadratic","text":"lower_quadratic(a::FT, b::FT, c::FT) where {FT<:AbstractFloat}\n\nReturn the lower quadratic solution or NaN, given\n\na Parameter in a*x^2 + b*x + c = 0\nb Parameter in a*x^2 + b*x + c = 0\nc Parameter in a*x^2 + b*x + c = 0\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.upper_quadratic","page":"API","title":"PkgUtility.upper_quadratic","text":"upper_quadratic(a::FT, b::FT, c::FT) where {FT<:AbstractFloat}\n\nReturn the upper quadratic solution or NaN, given\n\na Parameter in a*x^2 + b*x + c = 0\nb Parameter in a*x^2 + b*x + c = 0\nc Parameter in a*x^2 + b*x + c = 0\n\n\n\n\n\n","category":"function"},{"location":"API/#Statistics-extensions","page":"API","title":"Statistics extensions","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"mae\nmape\nmase\nnanmax\nnanmean\nnanmin\nnanstd\nrmse","category":"page"},{"location":"API/#PkgUtility.mae","page":"API","title":"PkgUtility.mae","text":"mae(y::Array, pred::Array)\n\nReturn the mean absolute error by ommiting the NaN, given\n\ny Array of numbers, can be NaN\npred Array of predictions, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.mape","page":"API","title":"PkgUtility.mape","text":"mape(y::Array, pred::Array)\n\nReturn the mean absolute percentage error by ommiting the NaN, given\n\ny Array of numbers, can be NaN\npred Array of predictions, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.mase","page":"API","title":"PkgUtility.mase","text":"mase(y::Array, pred::Array)\n\nReturn the mean absolute standardized error by ommiting the NaN, given\n\ny Array of numbers, can be NaN\npred Array of predictions, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.nanmax","page":"API","title":"PkgUtility.nanmax","text":"nanmax(x::Array)\n\nReturn the maximum of array ommiting the NaN, given\n\nx Array of numbers, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.nanmean","page":"API","title":"PkgUtility.nanmean","text":"nanmean(x::Array)\n\nReturn the mean of array by ommiting the NaN, given\n\nx Array of numbers, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.nanmin","page":"API","title":"PkgUtility.nanmin","text":"nanmin(x::Array)\n\nReturn the maximum of array ommiting the NaN, given\n\nx Array of numbers, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.nanstd","page":"API","title":"PkgUtility.nanstd","text":"nanstd(x::Array)\n\nReturn the std of array by ommiting the NaN, given\n\nx Array of numbers, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.rmse","page":"API","title":"PkgUtility.rmse","text":"rmse(y::Array, pred::Array)\n\nReturn the root mean square error by ommiting the NaN, given\n\ny Array of numbers, can be NaN\npred Array of predictions, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#Recursive-test","page":"API","title":"Recursive test","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"FT_test\nNaN_test","category":"page"},{"location":"API/#PkgUtility.FT_test","page":"API","title":"PkgUtility.FT_test","text":"FT_test(para::Any, FT)\n\nTest the the floating point type of para is FT, given\n\npara Any type of parameters\nFT given FT\n\nIf data type is not supported, use pass!\n\n\n\n\n\n","category":"function"},{"location":"API/#PkgUtility.NaN_test","page":"API","title":"PkgUtility.NaN_test","text":"NaN_test(para::Any)\n\nTest the the floating point type of para is not NaN, given\n\npara Any type of parameters\n\nIf data type is not supported, use pass!\n\n\n\n\n\n","category":"function"}]
}
