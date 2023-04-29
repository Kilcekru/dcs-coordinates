do
	local caucasus = {
		name = "caucasus",
		minZ = 20,
		maxZ = 93,
		minX = -40,
		maxX = 5,
	}

	local normandy = {
		name = "normandy",
		minZ = -15,
		maxZ = 22,
		minX = -13,
		maxX = 25,
	}

	local function exportGrid()
		local corners = caucasus -- change to correct table

		local grid = {}
		for x = corners.minX, corners.maxX do
			grid[tostring(x)] = {}
			for z = corners.minZ, corners.maxZ do
				local lat, lon = coord.LOtoLL({x = 10000 * x, y = 0, z = 10000 * z})
				grid[tostring(x)][tostring(z)] = {lat = lat, lon = lon}
			end
		end

		local fp = io.open(lfs.writedir().."Missions\\coords\\grid-" .. corners.name .. ".json", 'w')
		fp:write(json:encode(grid, nil, {pretty = true, indent = "\t"}))
		fp:close()
	end

	exportGrid()
end