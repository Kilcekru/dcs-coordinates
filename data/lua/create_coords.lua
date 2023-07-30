do
	-- factor for x & z: 10000
	-- factor for lat & lng: 0.1

	local caucasus = {
		name = "caucasus",
		xMax = 10,
		xMin = -45,
		zMax = 100,
		zMin = 15,
	}

	local normandy = {
		name = "normandy",
		xMax = 25,
		xMin = -13,
		zMax = 25,
		zMin = -20,
	}

	local persianGulf = {
		name = "persianGulf",
		xMax = 55,
		xMin = -37,
		zMax = 25,
		zMin = -45,
	}

	local southAtlantic = {
		name = "southAtlantic",
		xMax = 35,
		xMin = -50,
		zMax = 20,
		zMin = -110,
	}

	local syria = {
		name = "syria",
		xMax = 31,
		xMin = -34,
		zMax = 45,
		zMin = -41,
	}

	local function exportGrid()
		local config = syria -- change to correct table

		local latMin1, lngMin1 = coord.LOtoLL({x = 10000 * config.xMin, y = 0, z = 10000 * config.zMin})
		local latMin2, lngMax1 = coord.LOtoLL({x = 10000 * config.xMin, y = 0, z = 10000 * config.zMax})
		local latMax1, lngMin2 = coord.LOtoLL({x = 10000 * config.xMax, y = 0, z = 10000 * config.zMin})
		local latMax2, lngMax2 = coord.LOtoLL({x = 10000 * config.xMax, y = 0, z = 10000 * config.zMax})

		local grid = {
			bounds = {
				latMax = math.ceil(10 * math.max(latMax1, latMax2)),
				latMin = math.floor(10 * math.min(latMin1, latMin2)),
				lngMax = math.ceil(10 * math.max(lngMax1, lngMax2)),
				lngMin = math.floor(10 * math.min(lngMin1, lngMin2)),
				xMax = config.xMax,
				xMin = config.xMin,
				zMax = config.zMax,
				zMin = config.zMin,
			},
			ll = {},
			lo = {},
		}

		for x = grid.bounds.xMin, grid.bounds.xMax do
			local tmp = {}
			for z = grid.bounds.zMin, grid.bounds.zMax do
				local lat, lng = coord.LOtoLL({x = 10000 * x, y = 0, z = 10000 * z})
				table.insert(tmp, {lat, lng})
			end
			table.insert(grid.lo, tmp)
		end

		for lat = grid.bounds.latMin, grid.bounds.latMax do
			local tmp = {}
			for lng = grid.bounds.lngMin, grid.bounds.lngMax do
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