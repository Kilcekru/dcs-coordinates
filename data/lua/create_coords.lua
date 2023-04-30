do
	-- factor for x & z: 10000
	-- factor for lat & lng: 0.1

	local caucasus = {
		name = "caucasus",
		minX = -40,
		maxX = 5,
		minZ = 20,
		maxZ = 93,
		minLat = 409,
		maxLat = 455,
		minLng = 366,
		maxLng = 460,
	}

	local normandy = {
		name = "normandy",
		minX = -13,
		maxX = 25,
		minZ = -15,
		maxZ = 22,
		minLat = 482,
		maxLat = 518,
		minLng = -24,
		maxLng = 30,
	}

	local function exportGrid()
		local config = normandy -- change to correct table

		local grid = {
			minX = config.minX,
			minZ = config.minZ,
			minLat = config.minLat,
			minLng = config.minLng,
			lo = {},
			ll = {},
		}
		for x = config.minX, config.maxX do
			local tmp = {}
			for z = config.minZ, config.maxZ do
				local lat, lng = coord.LOtoLL({x = 10000 * x, y = 0, z = 10000 * z})
				table.insert(tmp, {lat, lng})
			end
			table.insert(grid.lo, tmp)
		end

		for lat = config.minLat, config.maxLat do
			local tmp = {}
			for lng = config.minLng, config.maxLng do
				local vec = coord.LLtoLO(lat / 10, lng / 10)
				table.insert(tmp, {vec.x, vec.z})
			end
			table.insert(grid.ll, tmp)
		end

		local fp = io.open(lfs.writedir().."Missions\\coords\\grid-" .. config.name .. ".json", 'w')
		fp:write(json:encode(grid, nil, {pretty = true, indent = "\t"}))
		fp:close()
	end

	exportGrid()
end