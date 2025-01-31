function gifpt(thisObj) {
    //#region Logo Binary
    var gifpt_logo_binary = "\x89\x50\x4e\x47\x0d\x0a\x1a\x0a\x00\x00\x00\x0d\x49\x48\x44\x52\x00\x00\x01\x5f\x00\x00\x00\x64\x08\x06\x00\x00\x00\x21\x7f\x33\x5b\x00\x00\x00\x09\x70\x48\x59\x73\x00\x00\x0b\x12\x00\x00\x0b\x12\x01\xd2\xdd\x7e\xfc\x00\x00\x0a\xb7\x49\x44\x41\x54\x78\x9c\xed\x9d\xfd\x6d\xe3\x38\x13\x87\xb5\x2f\xde\x06\x7c\x25\x24\x25\x38\x25\x78\x4b\xc8\x96\x60\x77\xa0\x44\x80\xfe\x34\xe0\xd8\x1d\x24\x25\xac\x4b\x88\x4b\x88\x4b\x38\xb7\xe0\x12\x72\x60\x6e\x94\xa3\xb4\xfc\xd2\x27\x25\xeb\x79\x00\x01\xbb\x89\xad\x88\x14\xf5\xd3\x70\x66\x38\xfc\xf1\xf9\xf9\x99\x00\x00\xc0\xb0\xfc\x8f\xfe\x06\x00\x18\x1e\xc4\x17\x00\x20\x02\x88\x2f\x00\x40\x04\x10\x5f\x00\x80\x08\x20\xbe\x00\x00\x11\x40\x7c\x01\x00\x22\x80\xf8\x02\x00\x44\x00\xf1\x05\x00\x88\x00\xe2\x0b\x00\x10\x01\xc4\x17\x00\x20\x02\x88\x2f\x00\x40\x04\x10\x5f\x00\x80\x08\x20\xbe\x00\x00\x11\x40\x7c\x01\x00\x22\x80\xf8\x02\x00\x44\x00\xf1\x05\x00\x88\x00\xe2\x0b\x00\x10\x01\xc4\x17\x00\x20\x02\x88\x2f\x00\x40\x04\x10\x5f\x00\x80\x08\x20\xbe\x00\x00\x11\xf8\x3f\x9d\x3e\x1d\xd2\x2c\x5f\x24\x49\xb2\x4e\x92\xe4\x31\x49\x92\x65\x92\x24\xd7\x24\x49\x8e\x49\x92\xec\x0f\xbb\xed\xa5\x4d\x43\xd2\x2c\x2f\xce\x59\x1c\x0b\xed\xd7\xa7\x24\x49\xce\xea\x6f\x1d\x76\xdb\xf3\x4c\xba\x1b\xa0\x57\xd8\x3a\x7e\x22\x88\xf0\xbe\x8b\x30\x9a\xd8\x1c\x76\xdb\xb7\xba\xad\x49\xb3\x5c\x89\xf9\x53\x92\x24\x77\x81\x5f\x51\x42\xfc\x8c\x08\x03\xb4\x03\xcb\x77\x3a\xfc\x76\x08\xaf\xe2\x35\xcd\xf2\x53\xa8\x05\x2c\x62\xae\xce\xb9\xaa\xd9\x03\x2b\x79\x09\xfc\x75\x03\x7d\x0a\x16\xd2\x2c\x5f\xc9\xbd\x36\xcd\x84\xae\x32\x13\x52\x87\x1a\x73\x27\xfa\xb1\x3e\x88\xef\x04\x48\xb3\xfc\x2e\x50\x24\x95\x05\xbb\xf1\x7d\x28\xc0\x8a\x86\x01\xd1\xdc\x49\x4f\x9a\xc8\x9d\x0f\xbb\xed\x43\xa4\xeb\x58\x7b\x66\x42\x0b\x19\x8f\xea\x78\x4a\xb3\x5c\xbd\xf0\xd5\xac\xeb\xed\xb0\xdb\x5e\x07\xbc\xe4\x49\x43\xc0\x6d\x1a\x3c\x06\x5e\x65\xe8\xe7\x5e\x5b\x0a\x2f\x2e\x87\x8e\x10\x5f\xfb\x47\x92\x24\x2f\x15\xeb\x72\xd0\x17\xa3\x58\xba\xc5\x75\x84\xba\xa0\x0a\xee\xe4\x7b\x1f\x72\x1e\x08\x00\xf1\xbd\x2d\x16\xbe\xd6\xc8\xc3\x11\x2a\xd2\x36\x98\x66\xb6\x44\xcd\x66\xd2\x2c\x7f\x17\xd7\x4f\x5d\xb1\xeb\xfa\x5a\xd6\x32\x13\x6a\x7b\x1d\xea\xfb\xef\x72\x3e\xf0\x80\xf8\x4e\x83\xd0\xa9\x5c\x88\x45\xfa\xd4\x41\x8b\x99\x5a\x36\x44\x4d\xed\xd3\x2c\x57\xf7\xe0\xef\x06\xfe\xf6\x3e\xae\x67\x2d\x33\xa1\x2e\x79\x45\x80\xfd\xe0\xf3\x9d\x06\x47\xc3\xb4\xd4\xc4\xd1\xf5\xcb\x1a\xbe\x63\x1f\xad\xd2\xda\xfa\x46\xda\xe9\xb2\xe2\xce\x31\x7c\x93\x22\x48\x21\xf7\x71\x10\xc4\xe5\xe1\x12\xde\x93\x8c\xa9\x52\x20\x57\x1b\x47\x8f\x8e\xf1\xa4\x04\xf8\x7a\xd8\x6d\x9d\x63\x72\xce\x20\xbe\x13\x40\x09\x45\x9a\xe5\xcf\x9e\x07\xe5\x2c\x41\x0f\x17\xa1\xee\x86\xb3\xe4\x0e\x7f\x3d\x38\x12\x88\xf9\x7e\xd8\x26\x10\xdd\xf6\x4d\xa1\x95\x90\xdc\x0f\x75\x31\x69\x96\x2f\x45\x74\x47\xe3\x0f\x15\x01\xb5\x8d\x27\xf5\x62\xfa\x65\xbb\xcf\x22\xc4\x5f\x01\x36\x71\x63\xfd\xb6\xbc\x50\x94\x00\x9f\xdb\xe6\xa0\xdf\x2a\x88\xef\x44\x50\x39\xbc\x69\x96\x27\x16\xcb\xe9\x24\x0f\x8b\xcf\x9a\x0b\x09\xe2\xa8\x07\xe5\xa7\x7e\x2e\xf9\xf7\xd1\x67\x59\x8f\x08\x9f\xef\x72\x68\x1f\xeb\xfb\x58\xac\x5d\x0d\x9b\x05\x7e\xae\xde\x7f\x17\x4a\xa0\xd3\x2c\xbf\xb7\x64\xcf\x2c\xe4\xef\xfc\x1a\xa0\x3d\x93\x03\x9f\xef\x84\x90\x45\x14\xf7\x92\x4e\xf6\x2c\xc7\xfd\x61\xb7\x0d\x7d\x58\x42\x04\x80\x74\xa1\xee\xb1\xf5\xfb\x51\xbb\x97\x83\xe1\x08\xba\x5e\x03\x5f\xe2\x25\xe4\xf3\x3f\x2d\xb1\x80\x47\x32\x20\xcc\x60\xf9\x4e\x0c\x19\xe8\xb5\x57\xb2\x09\x21\x0f\x01\x99\x0c\xfd\x72\x16\xd1\xfd\x7e\xc9\x49\x00\x6e\x48\x6c\xee\xa7\x4d\x53\x17\x81\xb8\xc6\x36\xe2\x82\xa8\xf2\xc8\xb8\xfa\x13\xc4\x17\x4a\xb0\x6c\xb8\x17\xf6\x45\x1d\x8e\xd8\xfe\x4f\x6d\x21\x45\x95\x53\xdb\xe0\x98\xfa\xbe\x5a\x65\x69\x78\xc9\xaf\x55\xcc\x82\x19\x55\x19\xc4\x17\xa0\x67\x0e\xbb\xed\xa0\x6e\x05\x0f\xb6\x14\xb0\xa6\xb3\x29\xd3\x79\x4c\x33\xac\xb5\xbc\x84\x40\x40\x7c\x6b\x22\x91\xeb\x47\xc3\x9a\xf7\x8b\x1c\x67\x49\x65\xb2\x5a\x11\x62\x7d\x54\x83\x13\xce\xf4\x27\x49\x0b\x72\x06\x8a\x0e\xbb\x6d\x69\x70\xcb\xb5\xd6\x0a\xf4\x04\xf8\xe7\x4a\xd7\xd9\xa2\x2d\x45\xff\xe9\x69\x61\x7a\xcd\x80\x5a\x15\xd4\x2c\xd7\xe1\xfa\x7c\xad\x76\xde\x10\xa6\x76\x5f\xba\x4a\x09\x13\xeb\xf7\x62\x18\xab\x2b\xc4\xb7\x0c\xe2\x1b\x88\x3c\xac\x4f\x0e\xbf\x69\x21\x22\x5f\xbf\x57\x39\x8e\x32\xd8\x4c\x01\x2c\x53\x64\xd8\x97\xfe\xf4\xea\x13\x52\x29\xac\x73\x4e\xda\x25\xcf\xbf\x7b\x7e\xaf\x7c\x7b\xf7\x5a\x9b\x3e\x0c\x0f\x9a\xba\x86\x52\x5d\x02\x4b\xfd\x82\x2a\xd5\x9a\x01\x27\x49\x79\x0b\xf1\x17\x9a\xae\xc3\x45\xdd\x76\xde\x0a\xa6\xf1\xdb\xb5\x3f\xf6\x68\x58\xcc\x43\xd0\xad\x02\xd9\x0e\x1e\x64\x45\xd2\x8b\x3c\xac\x75\x06\xd0\xc2\xb4\xde\x5d\x82\x2b\x26\x0b\xcd\x27\x1c\x21\x16\xec\xc2\xf2\xef\x2e\xa9\x5a\x98\xa6\xeb\x5e\xea\x41\xa4\x4a\xdd\x80\x3a\xd7\xb5\x92\xe5\xaa\x2f\x22\xde\x2e\xba\x4e\x1f\xab\x65\x49\x4f\x01\x87\xb5\xdf\xb5\xf8\x1a\x67\x2c\x64\x3d\x94\xc1\xf2\x75\xd0\x51\xf5\xaf\x62\xbd\xfb\xc6\x62\x11\xdc\x2a\xca\x72\x7d\x13\x17\x4d\xdb\xe5\xab\x5f\x33\x8e\x34\xcb\x83\xf3\x4f\xc1\x88\x6d\x1c\x77\x2d\xbe\xb6\xf3\x2d\xc9\x7a\xf8\x0f\x2c\x5f\x0b\x3d\x94\x5d\x7c\x15\xeb\x6f\x6c\xc9\xf6\x7d\xb1\x90\xf6\x76\x55\x37\x60\x29\x2f\xb1\xb9\xf4\x5f\x1f\x98\xfa\xee\xda\xf5\x0b\x4d\xce\x67\x3a\x27\xf7\x4e\x03\xf1\xb5\xf3\xd2\xc3\xb4\x33\x6a\xf5\xaa\x08\x74\xdd\xde\x62\x99\x2e\x34\xef\xbf\x2a\x7d\xa5\x16\x9a\xce\x4b\xfd\x68\x0d\xc4\xd7\x80\x44\xe3\xa9\xca\x34\x4e\xd6\x72\x7f\xa0\x1b\xfa\x72\xe3\xe0\x1e\xf2\x80\xf8\x9a\xb9\x05\xeb\xea\xdc\xd3\x03\x30\x86\x6d\x63\x4c\xf7\xa7\xeb\xba\x13\xb7\xb8\x3d\x0e\x96\xef\x88\x20\xe0\x56\x41\x52\xb4\x42\xa7\xcb\x45\x3a\xd9\xf7\xca\x25\x2d\x0f\x38\x6a\x60\x4d\x84\xa3\xb4\xcf\x5a\x9a\xe5\xde\xdd\x52\x0f\xbb\xed\x8f\x5e\x2f\xec\x5f\xf6\x7a\x1e\xaf\x54\xd8\x7a\xf4\xa4\xa1\xe9\xa8\x42\xe4\x6b\x7d\xc3\xd0\xc3\x6e\xfb\x5d\xbc\x65\x44\xed\x1c\x1b\xb1\x7d\xae\xf8\x7c\x35\x10\xdf\x3f\x09\x75\x37\x18\xab\x3f\x89\xa0\x9c\xd3\x2c\x3f\x8e\x61\x97\x82\x91\x71\x91\xc2\x2d\x25\xab\x48\x5e\x5c\x7b\xc9\x8e\x08\x0d\x72\xae\x3b\x5c\x95\x05\x30\x38\xb8\x1d\x34\xc4\x02\x0b\x79\xf0\xbd\x65\xf7\x44\x60\x1e\xf0\x7d\x7d\xa3\xfa\xe1\xc1\xb5\x6a\x4d\xab\x8e\x15\x32\x15\x5e\xca\xfd\x02\x98\x24\x88\x6f\x99\xd0\x40\xce\x26\x24\x3d\x47\x3e\x33\xa6\x75\xfd\x31\x09\x2a\xac\x22\x9f\xf1\xee\xc0\x2c\x10\x78\x83\xc9\x82\xf8\x96\x09\xb1\xa4\xde\xea\xd4\x1c\x10\xbf\xe4\xdc\x2b\xf9\x5f\x74\xff\xac\x0f\xe9\xdf\x90\x00\x1a\x96\x6f\x3d\x62\xcf\xc2\x98\x05\x6a\x20\xbe\x65\x42\x1e\xe6\x26\xd1\xe1\xb9\xfb\x26\x9b\xb4\x3f\x24\xd3\x00\xf1\xad\xc7\x90\x19\x08\x43\x66\x56\x4c\x12\xc4\xb7\x4c\xc8\xda\xf3\x26\x29\x4d\x73\x1f\x74\x4d\xda\x1f\x22\xbe\xd4\x0a\x68\x4f\x9f\x35\x40\xc0\x01\xe2\x5b\x13\x6a\x0b\x0c\x03\x9b\x2e\xf6\x02\x96\xef\x88\x40\x7c\x01\xe6\x83\xb1\xde\x42\xd7\xf5\x32\xe4\x7c\xc6\x3a\x12\x8c\xb5\xff\x40\x7c\x6b\x42\x61\x97\x61\xa0\x9f\x7b\xc1\x66\x79\x76\xed\xbe\xb1\x9d\x0f\xcb\x57\x03\xf1\x2d\x13\xe2\x67\x6c\x92\xde\x34\xf7\x65\x95\x4d\xda\x1f\xd2\xcf\x94\x27\xac\x81\x63\xb9\x74\xd7\xe3\xd3\x78\xbe\x1b\x5c\xae\xdd\x0a\xc4\xb7\x4c\xc8\xb4\xa8\xc9\x40\x9d\x7b\x91\x9e\x26\xed\x0f\xe9\x67\xa6\xb1\xf5\x31\x09\x60\xd7\xf9\xd2\xa6\xf3\x21\xbc\x15\x10\xdf\x32\x21\xd3\xa2\xb5\xd4\x6f\x08\xa2\x66\xad\x88\x5b\xe5\x4e\xfa\x21\xb4\xcf\x96\x81\x82\xdd\x78\x1a\x3b\xe3\x5d\x15\x4c\x22\x78\xd7\x55\xa5\x38\xc7\x5e\x83\x88\x6f\x05\xc4\xb7\x4c\xe8\x00\x79\x0d\xf1\x49\xca\xf2\x57\xea\xcf\xfe\x4b\xc8\x56\x40\x85\xaf\x37\xb4\x00\xbb\xed\x7e\x85\xdc\xc7\xb9\xba\x82\x6c\xa9\x92\x5d\xcd\xce\xfa\xde\x1d\xf9\x66\x40\x7c\x35\x64\x65\x55\x48\x8a\x53\xb1\xab\x82\xd5\xa2\x15\xeb\x6d\x4e\x3b\x57\xf8\x50\xfd\xf0\xb7\x6b\xd6\x20\xfd\x19\x5a\x58\xe7\xe2\x58\x69\x18\xe2\x8e\x78\x9a\x63\x50\x4f\x52\xf8\x4c\x42\xb8\x6a\x6b\xfd\xca\xf7\x4d\x33\x0a\xd3\x26\xb2\xb3\x87\xaa\x66\x7f\xf2\x16\x68\xad\x2e\x65\x73\xcc\x37\xbd\xf6\xab\x36\x00\xe7\xee\xe7\x35\xb1\xa8\xf4\xd9\x97\x15\x26\x2e\x80\xa2\xcf\x42\x05\xd1\x65\x49\x9d\x03\xfc\x98\xc5\xb5\x14\xe5\x2d\xaf\xf2\x62\x28\x5c\x1e\x77\x87\xdd\xf6\x2f\xcf\x39\xa6\xca\xd1\x32\x3e\xd5\x8c\xee\xdc\x24\xc7\xda\x33\x63\xe9\xba\xd6\xf2\x4d\x80\xf8\xfe\xc9\x5b\x8d\xba\xb2\x0b\xf9\xac\xb2\xa2\x86\xbe\xce\x29\xb3\x16\xdf\x79\xd3\x26\x5c\x3d\xe2\x7b\x0c\x7c\x81\xde\x89\x60\xbc\x9a\xae\x45\xbd\x14\xa6\x10\xa1\x17\x7f\x7a\x61\x71\x2a\xf1\xdc\xbb\x3e\xaf\xda\x24\x25\x4f\xab\x2f\x28\x35\x9e\x7f\xd7\xdd\xa8\x54\xdb\xef\xd0\xf4\xcc\x1c\xc9\x72\x30\x83\xdb\xa1\x82\x0c\x3a\xe7\xe0\x85\xe8\xec\x3d\xe5\x3c\x2f\x1d\x05\x78\x46\x1f\x28\x4d\xb3\xfc\x55\x5e\x20\x8f\x72\x28\xdf\xfa\x47\x80\x4b\xe5\xd9\xe2\x9e\x59\x8a\x7b\x28\x28\x20\x29\x9f\xfb\xb0\xb8\x8a\xa8\xea\xe7\x00\xcb\xd7\x80\xb2\x1c\xb4\x1d\x29\x60\x5c\x1c\x7d\x96\x9d\xb0\xef\x60\xf1\xc0\xa8\xc5\x57\x2c\x5e\x93\xfb\xa0\xd8\x68\xd4\x5a\x9a\x53\xbd\xa0\xd2\x2c\xdf\x48\xc1\xff\x2a\x0b\x89\x69\x9c\x64\x16\x71\xd2\x5d\x11\xe2\x9b\x5f\xc9\xf3\xe1\xea\xe3\x0d\xcb\xc4\xed\x60\xf9\xda\xd9\xb0\x22\x67\x74\x9c\x43\x6b\xfd\xca\x54\xb7\xed\x0c\x66\xec\x19\x11\x2e\xe1\xf3\x1a\x0e\xe2\x73\x77\xf5\xe7\x4a\xac\x6a\x65\x09\x7f\x16\x87\xfa\xbf\xfc\xdc\x27\xbc\xf8\x7a\x1d\x20\xbe\x16\x6a\xee\xaa\xe0\x63\xee\x69\x36\x5d\xb4\xdf\xbb\x7b\x88\x81\x7d\xcb\xfb\x37\x76\xf1\x75\xb9\x16\x82\x02\x97\x52\x67\x39\xb4\x78\x7d\x28\x9b\x3a\xf5\x9b\xe7\x0a\xe2\xeb\x40\x13\xe0\xa6\x6f\xf0\xb6\xdf\xbf\x15\x8e\xd2\x0f\x4d\xd3\x8d\x8e\x0d\x84\xb7\x8b\xfb\x37\x76\x5c\x7e\xed\xe0\x36\x8b\x50\xfe\xec\xa0\xe8\xff\x45\xee\x13\xc2\x1b\x00\xe2\xeb\x41\x3d\xc0\xb2\x33\x6e\x1d\x2b\xb8\x08\x34\xdc\xd7\x88\xf4\xfa\x84\xc5\xf7\x30\x5d\x02\xae\xcf\x77\x8e\xde\x44\x4a\xfa\xe1\xde\x11\xe8\x31\x51\x58\xbb\xbf\x9a\xe6\x89\x6a\xf7\xef\x57\x4d\x71\x39\xc9\x1e\x7c\x43\x60\xba\xae\x90\xb1\x66\xdb\x25\xa5\x76\xd0\x58\xee\xcf\x83\xdc\x9f\xba\x22\x7c\x91\xef\x3d\x90\xd9\x10\xce\x8f\xcf\x4f\xef\x2e\xdb\xa0\x21\x81\xb8\x22\x2f\x75\x21\x53\xd3\x8b\x26\x7e\xe7\xaa\xaf\x4b\x72\x7f\x4d\x81\x0d\x1d\x15\xd4\xf8\x39\xb5\xbe\x0e\xd9\xa6\x5d\x04\xb4\xf4\x50\x4a\x9f\x14\x79\xb5\x77\x72\x9c\x45\x38\x4e\xd2\x1f\x9d\xfb\xdc\x2d\xf7\x2f\xa9\xfc\xed\xe3\x54\x02\x45\x92\xd5\xf0\x22\x3e\xde\x85\xbc\x40\xf7\x6d\xfb\x4e\xcb\xbd\x2e\xee\x91\xee\xc6\xb8\x16\x63\x5d\xcf\x71\x87\x7a\x20\xbe\x03\x90\x66\xf9\x8b\xe4\x03\xbb\x38\x8a\x85\x36\xb5\xb6\x35\x12\x5f\x80\xb9\x83\xdb\x61\x18\x42\x52\xd6\xc8\xac\x00\x98\x11\x88\x6f\xcf\xa4\x59\xfe\x14\x98\x2f\x4a\x3e\x24\xc0\x8c\x60\x91\x85\x03\xf1\x0f\xbe\x6b\x89\xe6\xb5\x02\x52\x22\xbc\x41\x55\xcd\xc8\x89\x04\x98\x17\x88\xaf\x9b\x22\x88\xa1\xd7\x22\x38\xc9\x71\x91\xe0\x5a\xc9\x62\xd5\x8a\xb3\xf8\x56\xff\xe8\x90\x9a\x03\x30\x33\x10\x5f\x37\x26\xf1\x5c\xe9\x3f\xef\xa8\xa0\x0e\x56\x2f\xc0\xcc\xc0\xe7\x6b\x41\x52\x78\x86\x58\xe1\x44\xaa\x0e\xc0\x0c\x41\x7c\xed\x0c\xb1\xcd\xcc\xb5\x87\xa5\x9d\x00\x30\x01\x10\x5f\x3b\x43\x58\xbd\xcf\x54\x7d\x02\x98\x27\x88\xaf\x9d\xbe\xc5\x97\xe2\x23\x00\x33\x06\xf1\xb5\xd3\x64\x8d\x7b\x08\x17\x59\x03\x7f\x2b\xc2\xdb\x45\xcd\x09\x80\xd9\xc1\xf2\x62\x0f\x5a\x51\xf5\x55\x4b\x6b\xf8\x22\x6b\xee\xb1\x76\x01\x00\xf1\xad\x83\x96\x01\xa1\x17\x83\xb1\x65\x45\x9c\xb4\x02\x24\xbd\x14\x89\x01\x80\xe9\x82\xf8\x02\x00\x44\x00\x9f\x2f\x00\x40\x04\x10\x5f\x00\x80\x08\x20\xbe\x00\x00\x11\x40\x7c\x01\x00\x22\x80\xf8\x02\x00\x44\x00\xf1\x05\x00\x88\x00\xe2\x0b\x00\x10\x01\xc4\x17\x00\x20\x02\x88\x2f\x00\x40\x04\x10\x5f\x00\x80\x08\x20\xbe\x00\x00\x11\x40\x7c\x01\x00\x22\x80\xf8\x02\x00\x44\x00\xf1\x05\x00\x88\x00\xe2\x0b\x00\x10\x01\xc4\x17\x00\x20\x02\x88\x2f\x00\x40\x04\x10\x5f\x00\x80\xa1\x49\x92\xe4\x1f\x15\x1f\xe6\x11\x6a\x11\x32\xd4\x00\x00\x00\x00\x49\x45\x4e\x44\xae\x42\x60\x82";
    //#endregion

    //#region Main Setup
    var INITIALIZATION_ERROR = false;

    try {
        // Global Variables
        var SCRIPT_NAME = "gifpt";
        var SYSTEM_SEPARATOR = (File.fs === "Windows") ? "\\" : "/";
        var PERSONALITY_TEXT;
        var SETUP_VALUES;
        var LAST_UPDATED = (function (dateString) {
            var parts = dateString.split(".");
            if (parts.length === 3) {
                var day = parts[2].length === 1 ? "0" + parts[2] : parts[2];
                var month = parts[1].length === 1 ? "0" + parts[1] : parts[1];
                var year = parts[0].length === 2 ? parts[0] : parts[0].slice(-2);
                return year + "." + month + "." + day;
            } else {
                return dateString;
            }
        })("25.01.07");
        var CREATED_ON = "1712261793000";
        var SCRIPT_FILE = new File($.fileName);
        var SCRIPT_PATH = SCRIPT_FILE.parent.fsName;
        var global_palette_path;
        var global_input_path; // videoInput
        var global_output_path; // outputDirectory
        var global_config_object = {};
        var global_progress_window;
        var global_main_window;
        var global_current_file;
        var global_missing_critical = false;

        SETUP_VALUES = initializeSetup();
        PERSONALITY_TEXT = initializePersonality();

        INITIALIZATION_ERROR = false;
    } catch (error) {
        createPromptWindow(SCRIPT_NAME + ": Initialization", "Initialization Error:\n" + String(error) + "\n", ["OK"], null);
        INITIALIZATION_ERROR = true;
    }

    var DEFAULT_CONVERSION_CONFIG = {
        'ffmpegPath': {
            type: 'path',
            input_type: 'system_dialog',
            default_value: DEFAULT_FFMPEG_FILE_PATH,
            desc: 'Locate the path to the FFmpeg executable.',
            write_to_config: true,
            allow_blank: false,
            fragile: false,
        },
        'gifsiclePath': {
            type: 'path',
            input_type: 'system_dialog',
            default_value: DEFAULT_GIFSICLE_FILE_PATH,
            desc: 'Locate the path to the Gifsicle executable.',
            write_to_config: true,
            allow_blank: false,
            fragile: false,
        },
        'gifScale': {
            type: 'text',
            input_type: 'text_input_pair',
            default_value: '-1:-1',
            desc: 'The size of the output GIF.\nUse -1 for width or height to automatically adjust that dimension to maintain the aspect ratio based on the other value.\nSetting both to -1 will use the original dimensions.',
            write_to_config: true,
            allow_blank: false,
            fragile: true,
        },
        'gifFps': {
            type: 'text',
            input_type: 'text_input',
            default_value: '12',
            desc: 'Frame rate of the output GIF.',
            write_to_config: true,
            allow_blank: false,
            fragile: true,
        },
        'numColors': {
            type: 'text',
            input_type: 'text_input',
            default_value: '256',
            desc: 'Maximum number of colors for the GIF.\nLower values can reduce file size, but may cause color banding.\nValues can be set from 1 to 256.',
            write_to_config: true,
            allow_blank: false,
            fragile: true,
        },
        'gifPaletteGen': {
            type: 'boolean',
            input_type: 'boolean',
            default_value: 'true',
            desc: 'Whether to generate a custom color palette for each GIF.\nTrue enhances color quality, especially for complex videos.\nFalse uses a standard palette, which may reduce quality but speeds up processing.',
            write_to_config: true,
            allow_blank: false,
            fragile: true,
        },
        'gifLoopCount': {
            type: 'text',
            input_type: 'text_input',
            default_value: '',
            desc: 'The number of times the GIF will loop. Leave blank to loop infinitely.',
            write_to_config: true,
            allow_blank: true,
            fragile: true,
        },
        'playbackSpeed': {
            type: 'text',
            input_type: 'text_input',
            default_value: '1.0',
            desc: 'Playback speed multiplier.',
            write_to_config: true,
            allow_blank: false,
            fragile: true,
        },
        'startTime': {
            type: 'text',
            input_type: 'text_input',
            default_value: '0',
            desc: 'Time (in seconds) from the beginning of the video to convert.',
            write_to_config: true,
            allow_blank: false,
            fragile: true,
        },
        'duration': {
            type: 'text',
            input_type: 'text_input',
            default_value: '',
            desc: 'Duration (in seconds) of the video clip to convert.\nLeave blank to convert the entire video.',
            write_to_config: true,
            allow_blank: true,
            fragile: true,
        },
        'enableOptimization': {
            type: 'boolean',
            input_type: 'boolean',
            default_value: 'false',
            desc: 'Whether or not to optimize the GIF after creation.',
            write_to_config: true,
            allow_blank: false,
            fragile: true,
        },
        'lossyLevel': {
            type: 'text',
            input_type: 'text_input',
            default_value: '50',
            desc: 'Gifsicle lossy compression. 0 to 100.',
            write_to_config: true,
            allow_blank: false,
            fragile: true,
        },
        'ditheringMethod': {
            type: 'text',
            input_type: 'radio',
            default_value: 'ordered',
            desc: 'Gifsicle dithering mode.',
            write_to_config: true,
            allow_blank: false,
            fragile: true,
        },
        'optimizationSuffix': {
            type: 'text',
            input_type: 'text_input',
            default_value: '',
            desc: 'A suffix to be added to optimized GIFs.\nIf blank, the un-optimized GIF will be overwritten.',
            write_to_config: true,
            allow_blank: true,
            fragile: true,
        },
        'delayFrames': {
            type: 'number_array',
            input_type: 'number_array',
            default_value: '[]',
            desc: 'An array of values representing frame delay.',
            write_to_config: true,
            allow_blank: true,
            fragile: true,
        },
    };

    /**
     * Initializes and configures the script's static settings file. If the file does not exist, it creates one.
     * @returns {Object} The configuration settings object loaded or initialized by the function.
     */
    function initializeSetup() {
        // Global Settings
        var setup_defaults = {
            USER_NAME: $.getenv($.os.indexOf('Windows') !== -1 ? 'USERNAME' : 'USER'),
            GENERATE_REPORT: false,
            CLEAN_CONFIG_AT_START: true,
            FORCE_OPTIMIZE: false,
            ENABLE_ASYNC_EXECUTION: false,
            BUTTON_HEIGHT: 50,
            BUTTON_WIDTH: 100,
            DEFAULT_CONFIG_FILE_PATH: getAppDataPath("config", "txt"),
            DEFAULT_FFMPEG_FILE_PATH: formatPath(SCRIPT_PATH + "/" + SCRIPT_NAME + "/ffmpeg/bin/ffmpeg", "exe"),
            DEFAULT_GIFSICLE_FILE_PATH: formatPath(SCRIPT_PATH + "/" + SCRIPT_NAME + "/gifsicle/gifsicle", "exe"),
            DEFAULT_IMAGEMAGICK_FILE_PATH: formatPath(SCRIPT_PATH + "/" + SCRIPT_NAME + "imagemagick/magick", "exe"),
            ACCEPTED_FORMATS: ["mp4", "mov", "avi", "wmv", "mkv", "flv", "webm", "m4v", "3gp", "mpg", "mpeg", "ts", "vob", "ogv", "asf"],
            DITHERING_METHODS: ["ordered", "floyd-steinberg", "ro64", "o3", "o4", "o8", "halftone"],
            LAUNCHED_ON: new Date().getTime(),
            hello: "world",

        };

        var setupPath = getAppDataPath("setup", "txt")
        var setupFile = new File(setupPath);

        if (!setupFile.exists) {
            // If the file doesn't exist, create it and write default values
            setupFile.open('w');
            setupFile.write(JSON.stringify(setup_defaults, null, 2));
            setupFile.close();
        }

        // Now proceed with reading
        setupFile.open('r');
        setupContent = setupFile.read();
        setupFile.close();

        initializedSetup = JSON.parse(setupContent);

        // Make values available in the current scope
        // TODO Refactor to avoid using global this
        for (var key in initializedSetup) {
            if (initializedSetup.hasOwnProperty(key)) {
                this[key] = initializedSetup[key];
            }
        }

        // Return the setup object
        return initializedSetup;
    }
    //#endregion

    //#region Config
    /**
     * Retrieves the path to the script's data folder within the system's AppData (or equivalent) directory. 
     * Creates the folder if it does not already exist.
     * 
     * @param {string} [fileName] - The name of the file (without extension). Defaults to the script's name if not provided.
     * @param {string} [extension] - Optional file extension to append to the file name.
     * @returns {string} - The full path to the file within the script's data folder, or just the folder path if no parameters are provided.
     */
    function getAppDataPath(fileName, extension) {
        var scriptDataFolder;

        if ($.os.indexOf("Mac") !== -1) {
            scriptDataFolder = new Folder(Folder.userData.fsName + "/Application Support/" + SCRIPT_NAME);
        } else {
            scriptDataFolder = new Folder(Folder.userData.fsName + "\\" + SCRIPT_NAME);
        }

        if (!scriptDataFolder.exists) {
            scriptDataFolder.create();
        }

        // If no fileName is provided, return only the folder path
        if (!fileName) {
            return scriptDataFolder.fsName;
        }

        // Append system separator, file name, and extension (if provided)
        return scriptDataFolder.fsName + SYSTEM_SEPARATOR + fileName + (extension ? "." + extension : "");
    }

    /**
     * Initializes and validates the configuration settings based on user input and default values.
     * 
     * @param {Object} uiPanel - The user interface object containing input fields and settings.
     * @returns {Object} The initialized configuration object.
     */
    function initializeConfig(uiPanel) {
        global_missing_critical = false;

        global_config_object.ffmpegPath = (new File(DEFAULT_FFMPEG_FILE_PATH)).exists ?
            DEFAULT_FFMPEG_FILE_PATH :
            (uiPanel.pathGroup.ffmpegPath.edit.text || DEFAULT_FFMPEG_FILE_PATH);

        global_config_object.gifsiclePath = (new File(DEFAULT_GIFSICLE_FILE_PATH)).exists ?
            DEFAULT_GIFSICLE_FILE_PATH :
            (uiPanel.pathGroup.gifsiclePath.edit.text || DEFAULT_GIFSICLE_FILE_PATH);

        for (var key in DEFAULT_CONVERSION_CONFIG) {
            var def = DEFAULT_CONVERSION_CONFIG[key];
            var value;

            switch (key) {
                case 'ffmpegPath':
                    value = global_config_object.ffmpegPath;
                    break;
                case 'gifsiclePath':
                    value = global_config_object.gifsiclePath;
                    break;
                case 'gifScale':
                    value = uiPanel.settingsGroup.gifScale.widthEdit.text + ':' + uiPanel.settingsGroup.gifScale.heightEdit.text;
                    break;
                case 'gifFps':
                    value = uiPanel.settingsGroup.gifFps.edit.text;
                    break;
                case 'numColors':
                    value = uiPanel.settingsGroup.numColorsGroup.numColors.edit.text;
                    break;
                case 'gifPaletteGen':
                    value = uiPanel.settingsGroup.numColorsGroup.gifPaletteGenGroup.checkbox.value.toString();
                    break;
                case 'gifLoopCount':
                    value = uiPanel.settingsGroup.gifLoopCount.edit.text;
                    break;
                case 'playbackSpeed':
                    value = uiPanel.settingsGroup.playbackSpeed.edit.text;
                    break;
                case 'startTime':
                    value = uiPanel.settingsGroup.timeGroup.startTime.edit.text;
                    break;
                case 'duration':
                    value = uiPanel.settingsGroup.timeGroup.duration.edit.text;
                    break;
                case 'enableOptimization':
                    value = uiPanel.optimizeGroup.optimizeCheckbox.value.toString();
                    break;
                case 'lossyLevel':
                    value = uiPanel.optimizeGroup.settingsRow.lossyLevel.edit.text;
                    break;
                case 'optimizationSuffix':
                    value = uiPanel.optimizeGroup.optimizationSuffix.edit.text;
                    break;
                case 'ditheringMethod':
                    value = uiPanel.optimizeGroup.settingsRow.ditheringMethod.dropdown.selection.text;
                    break;
                case 'delayFrames':
                    value = [];
                    break;
                default:
                    // Fallback
                    value = def.default_value;
                    break;
            }

            if (value === '' && !def.allow_blank) {
                createPromptWindow(errorText(), key + " is required to proceed." + "\n", ["OK"], null);
                global_missing_critical = true;
            }

            global_config_object[key] = value || def.default_value; // Use default_value as fallback if value is falsy
        }

        saveConfig(DEFAULT_CONFIG_FILE_PATH, global_config_object);
        return global_config_object;
    }

    /**
     * Loads configuration settings from a given file.
     * @param {string} filePath - The path to the configuration file.
     * @returns {object} - The loaded configuration.
     */
    function loadConfig(filePath) {
        var configFile = new File(filePath);
        var config = {};
        if (configFile.exists) {
            configFile.open('r');
            var content = configFile.read();
            configFile.close();
            try {
                config = JSON.parse(content);
            } catch (e) {
                // If parsing fails, return an empty object
                config = {};
            }
        }
        return config;
    }

    /**
     * Saves configuration settings to a file.
     * @param {string} filePath - The path to the configuration file.
     * @param {object} config - The configuration settings to save.
     */
    function saveConfig(filePath, config) {
        var configFile = new File(filePath);
        var configToSave = {};

        try {

            for (var key in config) {
                if (config.hasOwnProperty(key) && DEFAULT_CONVERSION_CONFIG[key].write_to_config) {
                    configToSave[key] = config[key];
                }
            }

        } catch (error) {
            createPromptWindow(errorText(), "Error with " + filePath + ".\n\n" + String(error), ["OK"], null);
        }
        var jsonString = JSON.stringify(configToSave, null, 2);
        configFile.open('w');
        configFile.write(jsonString);
        configFile.close();
    }

    /**
     * Clears fragile values from the configuration settings if the user confirms.
     * @param {string} filePath - The path to the configuration file.
     * @param {object} config - The current configuration settings.
     */
    function cleanConfig(filePath, config) {
        var userSelection = createPromptWindow("Setup: Config", "Reset config settings?\n", ["Yes"], null, "No");

        if (userSelection === "Yes") {
            for (var key in DEFAULT_CONVERSION_CONFIG) {
                if (DEFAULT_CONVERSION_CONFIG[key].fragile) {
                    delete config[key];
                }
            }
            saveConfig(filePath, config);
        }
    }
    //#endregion

    //#region UI Setup
    function createUI(thisObj) {
        // if(INITIALIZATION_ERROR){
        //     return
        // }

        // Initialize global variables
        initializeSetup();

        var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", SCRIPT_NAME, undefined, { resizeable: true });
        if (pal === null) return pal;

        if (pal !== null) {
            var res = "Group { \
            orientation:'column', alignment:['fill','fill'], alignChildren: ['left', 'fill'], margins: 5, spacing: 10, ";

            // If FFmpeg isn't found at the default path, add UI controls to specify location
            if (INITIALIZATION_ERROR || !(new File(DEFAULT_FFMPEG_FILE_PATH)).exists) {
                res +=
                    "pathGroup: Panel { orientation:'column', alignment:['fill','top'], \
                ffmpegPath: Group { alignment:['fill','top'], \
                    label: StaticText { text:'FFmpeg Path:' }, \
                    edit: EditText { alignment:['fill','center'], properties:{readonly: true}, characters: 23 }, \
                    browse: Button { text:'Browse', alignment:['right','center'] } \
                }, \
                gifsiclePath: Group { alignment:['fill','top'], \
                    label: StaticText { text:'Gifsicle Path:' }, \
                    edit: EditText { alignment:['fill','center'], properties:{readonly: true}, characters: 23  }, \
                    browse: Button { text:'Browse', alignment:['right','center'] } \
                } \
                }";
            }

            // Main UI
            res +=
                "ioGroup: Panel { orientation:'column', alignment:['fill','top'], \
                inputVideo: Group { alignment:['fill','top'], \
                    label: StaticText { text:'Video(s):' }, \
                    edit: EditText { alignment:['fill','center'], properties:{readonly: true}, characters: 23 }, \
                    browse: Button { text:'Browse', alignment:['right','center'], preferredSize: [" + (BUTTON_WIDTH * 0.70) + "," + (BUTTON_HEIGHT * 0.60) + "] } \
                }, \
                outputDir: Group { alignment:['fill','top'], \
                    label: StaticText { text:'Output:' }, \
                    edit: EditText { alignment:['fill','center'], properties:{readonly: true}, characters: 23 }, \
                    browse: Button { text:'Browse', alignment:['right','center'], preferredSize: [" + (BUTTON_WIDTH * 0.70) + "," + (BUTTON_HEIGHT * 0.60) + "] } \
                } \
            }, \
            settingsGroup: Panel { orientation:'column', alignment:['fill','top'], \
                gifScale: Group { alignment:['fill','top'], \
                    label: StaticText { text:'Size:' }, \
                    widthLabel: StaticText { text:'w:' }, \
                    widthEdit: EditText { characters:5, text:'' }, \
                    heightLabel: StaticText { text:'h:' }, \
                    heightEdit: EditText { characters:5, text:'' }, \
                }, \
                gifFps: Group { alignment:['fill','top'], \
                    label: StaticText { text:'FPS:' }, \
                    edit: EditText { alignment:['fill','center'] } \
                }, \
                numColorsGroup: Group { alignment:['fill','top'], \
                    numColors: Group { alignment:['fill','center'], \
                        label: StaticText { text:'Colors:' }, \
                        edit: EditText { alignment:['fill','center'] } \
                    }, \
                    gifPaletteGenGroup: Group { alignment:['right','center'], \
                        label: StaticText { text:'Generate Palette:' }, \
                        checkbox: Checkbox { text:'' } \
                    } \
                }, \
                gifLoopCount: Group { alignment:['fill','top'], \
                    label: StaticText { text:'Loop Count:' }, \
                    edit: EditText { alignment:['fill','center'] } \
                }, \
                playbackSpeed: Group { alignment:['fill','top'], \
                    label: StaticText { text:'Speed:' }, \
                    edit: EditText { alignment:['fill','center'] } \
                }, \
                timeGroup: Group { alignment:['fill','top'], \
                    startTime: Group { alignment:['fill','center'], \
                        label: StaticText { text:'Start Time:' }, \
                        edit: EditText { alignment:['fill','center'] } \
                    }, \
                    duration: Group { alignment:['fill','center'], \
                        label: StaticText { text:'Duration:' }, \
                        edit: EditText { alignment:['fill','center'] } \
                    } \
                } \
            }, \
            optimizeGroup: Panel { orientation:'column', alignment:['fill','top'], \
                    optimizeCheckbox: Checkbox { text:'Optimization', alignment:['fill','top'] }, \
                    settingsRow: Group { alignment:['fill','top'], orientation:'row', \
                        lossyLevel: Group { alignment:['fill','top'], \
                            label: StaticText { text:'Lossy:' }, \
                            edit: EditText { alignment:['fill','center'] } \
                        } \
                        ditheringMethod: Group { alignment:['right','top'], \
                            dropdown: DropDownList { alignment:['right','center'] } \
                        }, \
                    }, \
                    optimizationSuffix: Group { alignment:['fill','top'], \
                        label: StaticText { text:'Suffix:' }, \
                        edit: EditText { alignment:['fill','center'] } \
                    } \
            }, \
            buttonGroup: Group { \
                alignment:['fill','bottom'], orientation:'row', \
                    helpBtn: Button { text:'?', alignment:['fill','bottom'], preferredSize: [" + (BUTTON_WIDTH * 0.15) + "," + (BUTTON_HEIGHT) + "] }, \
                    resetBtn: Button { text:'↻', alignment:['fill','bottom'], preferredSize: [" + (BUTTON_WIDTH * 0.15) + "," + (BUTTON_HEIGHT) + "] }, \
                    spacer: Group { alignment:['left','fill'] }, \
                    okBtn: Button { text:'Go!', alignment:['fill','bottom'], preferredSize: [" + BUTTON_WIDTH + "," + (BUTTON_HEIGHT) + "] }, \
            } \
            }";

            pal.grp = pal.add(res);

            // UI References
            var userInterface = {
                pathGroup: INITIALIZATION_ERROR || !(new File(DEFAULT_FFMPEG_FILE_PATH)).exists ? pal.grp.pathGroup : null,
                ioGroup: pal.grp.ioGroup,
                settingsGroup: pal.grp.settingsGroup,
                optimizeGroup: pal.grp.optimizeGroup,
                buttonGroup: pal.grp.buttonGroup
            };

            function updateOKButton() {
                var enableConditions = (userInterface.ioGroup.inputVideo.edit.text.length >= 5 && userInterface.ioGroup.outputDir.edit.text.length >= 5);
                userInterface.buttonGroup.okBtn.enabled = enableConditions;
                userInterface.buttonGroup.okBtn.text = startPhrase();
            }

            /**
             * Adds a help tip to a UI element based on a reference key.
             * @param {Object} element - The UI element to which the help tip will be added.
             * @param {string} key_or_reference - The reference key to look up in DEFAULT_GIF_CONFIG_SETTINGS, or if a key is not found, use this parameter as the helptip itself
             */
            function updateHelpTip(element, key_or_reference) {
                if (DEFAULT_CONVERSION_CONFIG[key_or_reference] && DEFAULT_CONVERSION_CONFIG[key_or_reference].desc) {
                    element.helpTip = DEFAULT_CONVERSION_CONFIG[key_or_reference].desc;
                } else {
                    element.helpTip = key_or_reference;
                }
            }

            // Populate dithering method dropdown
            for (var i = 0; i < DITHERING_METHODS.length; i++) {
                userInterface.optimizeGroup.settingsRow.ditheringMethod.dropdown.add('item', DITHERING_METHODS[i]);
            }

            // Set default values based on default gif conversion config settings
            populateUI(pal.grp);
            updateOKButton();

            // Disable optimization settings
            userInterface.optimizeGroup.optimizeCheckbox.value = false;
            userInterface.optimizeGroup.settingsRow.lossyLevel.enabled = false;
            userInterface.optimizeGroup.settingsRow.ditheringMethod.enabled = false;
            userInterface.optimizeGroup.optimizationSuffix.enabled = false;

            //#region UI Interaction
            // Set up optimize checkbox behavior
            userInterface.optimizeGroup.optimizeCheckbox.onClick = function () {
                userInterface.optimizeGroup.settingsRow.lossyLevel.enabled = this.value;
                userInterface.optimizeGroup.settingsRow.ditheringMethod.enabled = this.value;
                userInterface.optimizeGroup.optimizationSuffix.enabled = this.value;
            }

            // Set up FFMPEG and Gifsicle entry fields, if needed
            if (userInterface.pathGroup) {
                userInterface.pathGroup.ffmpegPath.browse.onClick = function () {
                    ffmpegPath = promptForValue("ffmpegPath", "path", "system_dialog", DEFAULT_FFMPEG_FILE_PATH, "Please select the executable file for the application.");

                    if (ffmpegPath) {
                        userInterface.pathGroup.ffmpegPath.edit.text = ffmpegPath;
                    } else {
                        createPromptWindow(errorText(), "I really do need that..." + "\n", ["OK"], null);
                    }
                }

                userInterface.pathGroup.gifsiclePath.browse.onClick = function () {
                    gifsiclePath = promptForValue("gifsiclePath", "path", "system_dialog", DEFAULT_GIFSICLE_FILE_PATH, "Please select the executable file for the application.");

                    if (gifsiclePath) {
                        userInterface.pathGroup.gifsiclePath.edit.text = gifsiclePath;
                    } else {
                        createPromptWindow(errorText(), "I really do need that..." + "\n", ["OK"], null);
                    }
                }
            }

            // Set up input video browse button
            userInterface.ioGroup.inputVideo.browse.onClick = function () {
                global_input_path = promptForVideoInput();
                if (global_input_path) {
                    userInterface.ioGroup.inputVideo.edit.text = global_input_path;
                    updateOKButton();
                } else {
                    global_input_path = undefined;
                    userInterface.buttonGroup.okBtn.enabled = false;
                    userInterface.ioGroup.inputVideo.edit.text = "";
                    createPromptWindow(errorText(), "What is " + SCRIPT_NAME + " supposed to do then?" + "\n", ["OK"], null);
                }
            }

            // Set up output directory browse button
            userInterface.ioGroup.outputDir.browse.onClick = function () {
                var keyboardState = ScriptUI.environment.keyboardState;

                if (keyboardState.shiftKey && global_output_path) {
                    // If shift is pressed and outputDirectory exists
                    openFolder(global_output_path);
                } else {
                    // If shift is not pressed or outputDirectory doesn't exist
                    global_output_path = promptForOutputDirectory();

                    if (global_output_path) {
                        // If a directory was successfully selected
                        userInterface.ioGroup.outputDir.edit.text = global_output_path;
                        updateOKButton();
                    } else {
                        // If directory selection was cancelled or failed
                        global_output_path = undefined;
                        userInterface.buttonGroup.okBtn.enabled = false;
                        userInterface.ioGroup.outputDir.edit.text = "";
                        createPromptWindow(errorText(), "No seriously, where should " + SCRIPT_NAME + " save these GIFs?" + "\n", ["OK"], null);
                    }
                }
            };

            // Set up OK button
            userInterface.buttonGroup.okBtn.onClick = function () {
                // Make sure we have an input and output
                global_config_object = initializeConfig(pal.grp);

                if (!global_missing_critical) {
                    gifpt_main(global_config_object);
                    userInterface.buttonGroup.okBtn.text = "Make another?";
                }
            }

            // Set up help button
            userInterface.buttonGroup.helpBtn.onClick = function () {
                var keyboardState = ScriptUI.environment.keyboardState;

                switch (true) {
                    case keyboardState.shiftKey && (keyboardState.ctrlKey || keyboardState.metaKey):
                        // If shift + ctrl/meta are pressed
                        if (openFolder(getAppDataPath())) {
                            // Folder opened successfully
                        } else {
                            createPromptWindow(SCRIPT_NAME + " v1." + LAST_UPDATED, "Unable to open the script data folder.\nMake sure to enable file execution in the settings!", ["OK"], null);
                        }
                        break;

                    case keyboardState.shiftKey:
                        // If only shift is pressed
                        var message = "";
                        var now = new Date().getTime();
                        var timeSinceInstall = calculateDuration(LAUNCHED_ON, now);
                        var timeData = handleTimeClock();
                        var days = timeSinceInstall.days;
                        var months = timeSinceInstall.months;
                        var hours = Math.floor(timeData.totalDuration / 3600).toString().replace(/^(\d{5})(.).*$/, '$1' + " ...ish");
                        var minutes = ((timeData.totalDuration % 3600) / 60).toFixed(1);
                        var averageTimeSpent = ((((hours + ((minutes / 60) * 100)) / (days * 24)) / days)).toFixed(2);
                        var reaction = (averageTimeSpent >= 1.25) ? "Maybe it's time for a break?" : "Let's make even more!";
                        var formattedDurationText = "It's been " + (months > 0 ? months + " " + (months > 1 ? "months" : "month") + " and " : "") + days + " " + (days > 1 ? "days" : "day") + ",";

                        message += (((days <= 1) && (months === 0)) ? "It's only been one day" : formattedDurationText) + " and ";

                        var hourText = hours > 0 ? hours + " hour" + (hours > 1 ? "s" : "") + " and " : "";
                        var gifText = timeData.totalGIFs === 1 ? "one GIF. Gotta start somewhere!" : timeData.totalGIFs + " GIFs.";

                        message += "we've spent " + hourText + minutes + " minutes " + (timeData.totalGIFs === 1 ? "on " : "converting ") + gifText;
                        message += " " + reaction;
                        message += "\n--\n";
                        message += "Created with <3 in Blacksburg, Virginia";

                        createLogoWindow(SCRIPT_NAME + " v1." + LAST_UPDATED, message, "Make some GIFs!", gifpt_logo_binary);
                        break;

                    default:
                        createPromptWindow(SCRIPT_NAME + " v1." + LAST_UPDATED, "Hover over a setting for more information.\n\nNeed more help? Check the readme!", ["OK"], null);
                        break;
                }
            };

            // Set up reset button
            userInterface.buttonGroup.resetBtn.onClick = function () {
                // Check if the Shift key is pressed and config is true
                if (ScriptUI.environment.keyboardState.shiftKey && global_config_object) {
                    cleanConfig(DEFAULT_CONFIG_FILE_PATH, global_config_object);
                }

                SETUP_VALUES = initializeSetup();
                PERSONALITY_TEXT = initializePersonality();

                // Reset default UI values
                populateUI(pal.grp);
                userInterface.buttonGroup.okBtn.text = startPhrase()
            }
            //#endregion

            //#region Help Tips
            if (userInterface.pathGroup) {
                updateHelpTip(userInterface.pathGroup.ffmpegPath.edit, "ffmpegPath");
                updateHelpTip(userInterface.pathGroup.gifsiclePath.edit, "gifsiclePath");
            }
            updateHelpTip(userInterface.ioGroup.inputVideo.edit, "Select a video, or a whole folder to convert to GIF!");
            updateHelpTip(userInterface.ioGroup.outputDir.edit, "Select an output location for the completed GIFS.\nShift+Click to open the selected directory.");
            updateHelpTip(userInterface.settingsGroup.gifScale.widthEdit, "gifScale");
            updateHelpTip(userInterface.settingsGroup.gifScale.heightEdit, "gifScale");
            updateHelpTip(userInterface.settingsGroup.gifFps.edit, "gifFps");
            updateHelpTip(userInterface.settingsGroup.numColorsGroup.numColors.edit, "numColors");
            updateHelpTip(userInterface.settingsGroup.numColorsGroup.gifPaletteGenGroup.checkbox, "gifPaletteGen");
            updateHelpTip(userInterface.settingsGroup.gifLoopCount.edit, "gifLoopCount");
            updateHelpTip(userInterface.settingsGroup.playbackSpeed.edit, "playbackSpeed");
            updateHelpTip(userInterface.settingsGroup.timeGroup.startTime.edit, "startTime");
            updateHelpTip(userInterface.settingsGroup.timeGroup.duration.edit, "duration");
            updateHelpTip(userInterface.optimizeGroup.optimizeCheckbox, "Enable GIF optimization via Gifsicle");
            updateHelpTip(userInterface.optimizeGroup.settingsRow.lossyLevel.edit, "lossyLevel");
            updateHelpTip(userInterface.optimizeGroup.optimizationSuffix.edit, "optimizationSuffix");
            updateHelpTip(userInterface.optimizeGroup.settingsRow.ditheringMethod.dropdown, "ditheringMethod");
            updateHelpTip(userInterface.buttonGroup.resetBtn, "Reset UI values to the defaults, or\nShift+Click to reset the config file.")
            updateHelpTip(userInterface.buttonGroup.helpBtn, "Click here for help, or Shift+Click to view credits.\nShift+Click+Ctrl (or Cmd) to open " + SCRIPT_NAME + "'s data folder.");
            //#endregion
        }

        pal.onResizing = pal.onResize = function () {
            this.layout.resize();
        }

        if (pal instanceof Window) {
            pal.center();
            pal.show();
        } else {
            pal.layout.layout(true);
        }

        global_main_window = pal;

        return pal;
    }
    //#endregion

    //#region UI Utilities
    /**
     * Update the UI according to the config file.
     *
     * @param {Object} uiPanel - The UI elements to update.
     */
    function populateUI(uiPanel) {
        var this_setting_name = SCRIPT_NAME + LAST_UPDATED;

        // If a config file is found at the default path, load it
        if ((new File(DEFAULT_CONFIG_FILE_PATH)).exists) {
            global_config_object = loadConfig(DEFAULT_CONFIG_FILE_PATH);
        }

        // If FFMPEG is not found, add controls to the UI for its path to be specified
        if (INITIALIZATION_ERROR || !(new File(DEFAULT_FFMPEG_FILE_PATH)).exists) {
            uiPanel.pathGroup.ffmpegPath.edit.text = "";
            uiPanel.pathGroup.gifsiclePath.edit.text = "";
        }

        // Set input video path
        if (app.settings.haveSetting(this_setting_name, "last_selected_file_folder")) {
            // uiPanel.ioGroup.inputVideo.edit.text = app.settings.getSetting(this_setting_name, "last_selected_file_folder");
            global_input_path = app.settings.getSetting(this_setting_name, "last_selected_file_folder");
        }

        // Set output directory path
        if (app.settings.haveSetting(this_setting_name, "last_selected_output_folder")) {
            uiPanel.ioGroup.outputDir.edit.text = app.settings.getSetting(this_setting_name, "last_selected_output_folder");
            global_output_path = app.settings.getSetting(this_setting_name, "last_selected_output_folder");
        }

        for (var key in DEFAULT_CONVERSION_CONFIG) {
            var def = DEFAULT_CONVERSION_CONFIG[key];
            var value = global_config_object.hasOwnProperty(key) ? global_config_object[key] : def.default_value;
            switch (key) {
                case 'gifScale':
                    var parts = value.split(':');
                    uiPanel.settingsGroup.gifScale.widthEdit.text = parts[0];
                    uiPanel.settingsGroup.gifScale.heightEdit.text = parts[1];
                    break;
                case 'gifFps':
                    uiPanel.settingsGroup.gifFps.edit.text = value;
                    break;
                case 'numColors':
                    uiPanel.settingsGroup.numColorsGroup.numColors.edit.text = value;
                    break;
                case 'gifPaletteGen':
                    uiPanel.settingsGroup.numColorsGroup.gifPaletteGenGroup.checkbox.value = (value === 'true');
                    break;
                case 'gifLoopCount':
                    uiPanel.settingsGroup.gifLoopCount.edit.text = value;
                    break;
                case 'playbackSpeed':
                    uiPanel.settingsGroup.playbackSpeed.edit.text = value;
                    break;
                case 'startTime':
                    uiPanel.settingsGroup.timeGroup.startTime.edit.text = value;
                    break;
                case 'duration':
                    uiPanel.settingsGroup.timeGroup.duration.edit.text = value;
                    break;
                case 'lossyLevel':
                    uiPanel.optimizeGroup.settingsRow.lossyLevel.edit.text = value;
                    break;
                case 'optimizationSuffix':
                    uiPanel.optimizeGroup.optimizationSuffix.edit.text = value;
                    break;
                case 'ditheringMethod':
                    for (var i = 0; i < uiPanel.optimizeGroup.settingsRow.ditheringMethod.dropdown.items.length; i++) {
                        if (uiPanel.optimizeGroup.settingsRow.ditheringMethod.dropdown.items[i].text === value) {
                            uiPanel.optimizeGroup.settingsRow.ditheringMethod.dropdown.selection = i;
                            break;
                        }
                    }
                    break;
                case 'enableOptimization':
                    uiPanel.optimizeGroup.optimizeCheckbox.value = (value === 'true');
                    uiPanel.optimizeGroup.settingsRow.lossyLevel.enabled = (value === 'true');
                    uiPanel.optimizeGroup.settingsRow.ditheringMethod.enabled = (value === 'true');
                    uiPanel.optimizeGroup.optimizationSuffix.enabled = (value === 'true');
                    break;
            }
        }
    }

    /**
     * Creates a base prompt window with common properties.
     * @param {string} title - The title of the dialog window.
     * @param {string} message - The message to be displayed.
     * @returns {Window} - The created window object.
     */
    function createBasePromptWindow(title, message) {
        var win = new Window("dialog", title, undefined, {
            resizeable: true
        });
        win.orientation = "column";
        win.alignChildren = ["fill", "fill"];
        win.spacing = 10;
        win.margins = 25;
        win.preferredSize = [300, 20];

        win.onResize = function () {
            this.layout.resize();
        };

        var messageText = win.add("statictext", undefined, message, {
            multiline: true
        });

        return win;
    }

    /**
     * Displays a custom dialog window for input or selections.
     * @param {string} title - The title of the dialog window.
     * @param {string} message - The message to be displayed.
     * @param {string[]} choices - An array of string choices for buttons (null if text input is needed).
     * @param {string} defaultValue - Default text value if applicable.
     * @param {string} actionButtonText - The text for the window's action button.
     * @returns {string|null} - The value entered or chosen by the user, or null if cancelled.
     */
    function createPromptWindow(title, message, choices, defaultValue, actionButtonText, valueType) {
        // Create a base window for building the prompt
        var win = createBasePromptWindow(title, message);

        // Create a variable to store the user's input
        var input = null;

        if (choices) {
            var buttonGroup = win.add("group");
            buttonGroup.orientation = "row";
            buttonGroup.alignChildren = ["fill", "center"];
            for (var i = 0; i < choices.length; i++) {
                var choice = choices[i];
                var btn = buttonGroup.add("button", undefined, choice);
                btn.preferredSize = [BUTTON_WIDTH, BUTTON_HEIGHT];
                btn.onClick = function () {
                    input = this.text;
                    win.close();
                };
            }
        } else {
            var inputGroup = win.add("group");
            inputGroup.orientation = "row";
            inputGroup.alignChildren = ["fill", "center"];
            var inputField = inputGroup.add("edittext", undefined, defaultValue);
            inputField.characters = 50;

            var okButton = win.add("button", undefined, "OK");
            okButton.preferredSize = [BUTTON_WIDTH, BUTTON_HEIGHT];
            okButton.onClick = function () {
                input = inputField.text;
                win.close();
            };
        }

        var actionGroup = win.add("group");
        actionGroup.orientation = "row";
        actionGroup.alignChildren = ["fill", "center"];

        var cancelButton = actionGroup.add("button", undefined, actionButtonText ? actionButtonText : "Cancel");
        cancelButton.preferredSize = [BUTTON_WIDTH, BUTTON_HEIGHT];
        cancelButton.onClick = function () {
            win.close();
        };

        win.center();
        win.show();
        return input;
    }

    /**
     * Displays a custom dialog window for displaying a logo.
     * @param {string} title - The title of the dialog window.
     * @param {string} message - The message to be displayed.
     * @param {string} logo - The binary for the logo to be displayed
     * @returns {string|null} - The value entered or chosen by the user, or null if cancelled.
     */
    function createLogoWindow(title, message, buttonText, bin) {
        var win = new Window("dialog", title, undefined, {
            resizeable: true
        });
        win.orientation = "column";
        win.alignChildren = ["fill", "fill"];
        win.spacing = 10;
        win.margins = 25;
        win.preferredSize = [300, 20];

        win.onResize = function () {
            this.layout.resize();
        };

        var logoGroup = win.add("group");
        logoGroup.alignChildren = ["fill", "center"];
        var logo = logoGroup.add("image", undefined, bin);

        var messageText = win.add("statictext", undefined, message, {
            multiline: true
        });
        messageText.justify = "center";

        var actionGroup = win.add("group");
        actionGroup.orientation = "row";
        actionGroup.alignChildren = ["fill", "center"];

        var continueButton = actionGroup.add("button", undefined, buttonText ? buttonText : "Continue");
        continueButton.preferredSize = [BUTTON_WIDTH, BUTTON_HEIGHT];
        continueButton.onClick = function () {
            win.close();
        };

        win.center();
        win.show();
        return null;
    }

    /**
     * Creates a progress bar window.
     * @param {string} title - The title of the progress bar window.
     * @param {number} maxValue - The maximum value of the progress bar.
     * @returns {Object} An object containing the progress bar and the window.
     */
    function createProgressBar(title, maxValue) {
        var progress_bar_window = new Window("palette", title, undefined, {
            closeButton: false,
            independent: true
        });
        var progress_bar = progress_bar_window.add("progressbar", undefined, 0, maxValue);

        progress_bar.preferredSize = [300, 20];

        progress_bar_window.redraw = function () {
            progress_bar_window.update();
        }

        progress_bar_window.updateTitle = function (newTitle) {
            progress_bar_window.text = newTitle;
            progress_bar_window.update();
        };

        progress_bar_window.updateProgress = function (value) {
            progress_bar.value = value;
            progress_bar_window.update();
        };

        progress_bar_window.seppuku = function () {
            progress_bar_window.hide();
            progress_bar_window.close();
            progress_bar_window.visible = false;
        }

        return {
            progress_bar: progress_bar,
            window: progress_bar_window
        };
    }

    /**
     * Logs a message to a log file, with a timestamp, the name of the associated file, and appends the config content.
     * Updated for Mac OS compatibility.
     * @param {string} message - The message to log.
     * @param {string} logFileName - A string to label the log with.
     * @param {object} config - The configuration settings to append.
     * @param {string} outputDirectory - The directory where the output GIFs are saved.
     */
    function logMessage(message, logFileName, config, outputDirectory) {
        var logMessageContent = "";
        var timestamp = formatTimestamp(5);

        var formattedConfigSettings = JSON.stringify(
            config,
            null, // No replacer function - include all properties
            4 // Number of spaces for indentation
        );

        var extractedLogFileName = extractFileName(logFileName);
        var logFolderPath = outputDirectory + SYSTEM_SEPARATOR + "log";
        var logFilePath = logFolderPath + SYSTEM_SEPARATOR + extractedLogFileName + "_" + timestamp + ".txt";
        var logFolder = new Folder(logFolderPath);

        // Create the log folder if it doesn't already exist
        if (!logFolder.exists) {
            if (!logFolder.create()) {
                createPromptWindow(errorText(), "Failed to create log folder: " + logFolderPath + "\n", ["Try again..."], null);
                return;
            }
        }

        var logFile = new File(logFilePath);

        if (logFile.open('w')) {
            logMessageContent += "Config Path: " + decodeURIComponent(DEFAULT_CONFIG_FILE_PATH) + "\n\n";
            logMessageContent += "Config Settings:" + "\n" + formattedConfigSettings + "\n\n";
            logMessageContent += "Logged Messages:" + "\n";
            logMessageContent += message;

            logFile.writeln(logMessageContent);

            logFile.close();
        } else {
            createPromptWindow(errorText(), "Failed to open log file for writing: " + logFilePath + "\n", ["Try again..."], null);
        }
    }

    /**
     * Prompts the user for a value for a given configuration key, using a custom dialog window.
     * @param {string} key - The configuration key.
     * @param {string} valueType - The type of value (path, boolean, text).
     * @param {string} inputType - The type of input method (system_dialog, boolean, text_input, text_input_pair, radio).
     * @param {string} defaultValue - The default value for the configuration key.
     * @param {string} description - Description of what the configuration key affects.
     * @returns {string|null} - The user-provided value or null if none.
     */
    function promptForValue(key, valueType, inputType, defaultValue, description) {
        var defaultValueLabel = defaultValue === "" ? "Default: Blank" : "Default: " + defaultValue;
        var promptMessage = description + "\n\n" + "Please enter the value for " + key + " (" + defaultValueLabel + "):"

        switch (valueType) {
            case 'path':
                var defaultPath = defaultValue && new File(defaultValue).exists ? new File(defaultValue) : undefined;
                // If 'defaultPath' points to a valid file, use it to open the dialog preselected to that file
                if (defaultPath) {
                    var fileObj = defaultPath.openDlg("Please locate: " + key, "*.exe", false);
                } else {
                    // If no valid default path, just open the dialog normally
                    var fileObj = File.openDialog("Please locate: " + key, "*.exe", false);
                }
                return fileObj ? fileObj.fsName : (defaultValue || null);
            case 'boolean':
                var choices = ["Yes", "No"];
                var result = createPromptWindow("Setup: " + key, promptMessage, choices);
                return result === "Yes" ? "true" : "false";
            default:
                return createPromptWindow("Setup: " + key, promptMessage, null, defaultValue);
        }
    }

    /**
     * Prompts the user to select a video input source.
     * @returns {Array|string|null} - The selected video files or null if none.
     */
    function promptForVideoInput() {
        var this_setting_name = SCRIPT_NAME + LAST_UPDATED;
        var fileDialogFilter = buildFileDialogFilter(ACCEPTED_FORMATS);

        var inputTypeOptions = ["Select File(s)", "Select Folder"];
        var userSelectedInputType = createPromptWindow("Setup: Video Input", "Select individual files, or a folder?", inputTypeOptions, null);

        function isAcceptedFormat(file) {
            var extension = file.name.split('.').pop().toLowerCase();
            return ACCEPTED_FORMATS.indexOf(extension) !== -1;
        }

        if (userSelectedInputType === "Select File(s)") {
            var lastFileDirectory = (app.settings.haveSetting(this_setting_name, "last_selected_file_folder")) ? app.settings.getSetting(this_setting_name, "last_selected_file_folder") : null;
            global_input_path = File.openDialog("Select video file(s) for conversion.", [fileDialogFilter, "All Files:*.*"], true, lastFileDirectory ? new Folder(lastFileDirectory) : undefined);
            if (global_input_path) {
                if (global_input_path instanceof File) {
                    if (isAcceptedFormat(global_input_path)) {
                        app.settings.saveSetting(this_setting_name, "last_selected_file_folder", global_input_path.parent.fsName);
                        return [global_input_path.fsName];
                    }
                } else if (global_input_path instanceof Array) {
                    var validFiles = global_input_path.filter(function (file) {
                        return file instanceof File && isAcceptedFormat(file);
                    });
                    if (validFiles.length > 0) {
                        app.settings.saveSetting(this_setting_name, "last_selected_file_folder", validFiles[0].parent.fsName);
                        return validFiles.map(function (file) {
                            return file.fsName;
                        });
                    }
                }
            }
        } else if (userSelectedInputType === "Select Folder") {
            var lastDirDirectory = (app.settings.haveSetting(this_setting_name, "last_selected_dir_folder")) ?
                app.settings.getSetting(this_setting_name, "last_selected_dir_folder") : null;
            var videoInputDir = Folder.selectDialog("Select a folder containing video(s) for conversion.", lastDirDirectory ? new Folder(lastDirDirectory) : null);
            if (videoInputDir) {
                var validFiles = videoInputDir.getFiles(function (file) {
                    return file instanceof File && isAcceptedFormat(file);
                });
                if (validFiles.length > 0) {
                    app.settings.saveSetting(this_setting_name, "last_selected_dir_folder", videoInputDir.fsName);
                    return validFiles.map(function (file) {
                        return file.fsName;
                    });
                }
            }
        }
        return null;
    }

    /**
     * Prompts the user to select a directory to save the output GIFs.
     * @returns {string|null} - The selected directory or null if none.
     */
    function promptForOutputDirectory() {
        var this_setting_name = SCRIPT_NAME + LAST_UPDATED;

        var projectFileDirectory = (app.project && app.project.file) ? app.project.file.parent.fsName : null;
        var lastOutputDirectory = (app.settings.haveSetting(this_setting_name, "last_selected_output_folder")) ? app.settings.getSetting(this_setting_name, "last_selected_output_folder") : null;

        var prefillDirectory = lastOutputDirectory || projectFileDirectory || Folder.desktop.fsName;
        // TODO A more intuitive way to get the default output location

        global_output_path = Folder.selectDialog("Select a directory to save the output GIFs.", new Folder(prefillDirectory));

        if (global_output_path) {
            app.settings.saveSetting(this_setting_name, "last_selected_output_folder", global_output_path.fsName);
            return global_output_path.fsName;
        } else {
            return null;
        }
    }
    //#endregion

    //#region Personality Utilities
    /**
     * Initialize random phrases from the external table.
     *
     * @returns {Object} The phrase strings.
     */
    function initializePersonality() {
        var personalityPath = SCRIPT_PATH + "/" + SCRIPT_NAME + "/personality.txt";

        // Load the phrases from the personality file
        var personalityFile = new File(personalityPath);
        personalityFile.open("r");
        var personalityContent = personalityFile.read();
        personalityFile.close();

        var phrases = JSON.parse(personalityContent);

        return phrases;
    }

    /**
     * Returns a randomized error exclamation.
     */
    function errorText() {
        try {
            phrases = PERSONALITY_TEXT;
            var exclamations = phrases.errorExclamations;
            var randomIndex = Math.floor(Math.random() * exclamations.length);
            var text = exclamations[randomIndex];
            return replacePersonalityVariables(text);
        } catch (error) {
            return "Error!";
        }
    }

    /**
     * Returns a randomized success confirmation.
     */
    function successText() {
        try {
            phrases = PERSONALITY_TEXT;
            var confirmations = phrases.successConfirmations;
            var randomIndex = Math.floor(Math.random() * confirmations.length);
            var text = confirmations[randomIndex];
            return replacePersonalityVariables(text);
        } catch (error) {
            return "Success!";
        }
    }

    /**
     * Returns a randomized processing phrase.
     */
    function processingPhrase() {
        try {
            phrases = PERSONALITY_TEXT;
            var processingPhrases = phrases.processingPhrases;
            var randomIndex = Math.floor(Math.random() * processingPhrases.length);
            var text = processingPhrases[randomIndex];
            return replacePersonalityVariables(text);
        } catch (error) {
            return "Processing...";
        }
    }

    /**
     * Returns a randomized processing phrase.
     */
    function startPhrase() {
        try {
            phrases = PERSONALITY_TEXT;
            var startPhrases = phrases.startPhrases;
            var randomIndex = Math.floor(Math.random() * startPhrases.length);
            var text = startPhrases[randomIndex];
            return replacePersonalityVariables(text);
        } catch (error) {
            return "Go!";
        }
    }

    /**
     * Replaces all script variables in the given text with their corresponding values.
     */
    function replacePersonalityVariables(text) {
        var variables = {
            "{USER_NAME}": USER_NAME,
            "{SCRIPT_NAME}": SCRIPT_NAME,
            "{CURRENT_FILE}": global_current_file,
        };

        for (var key in variables) {
            if (variables.hasOwnProperty(key) && variables[key] !== undefined) {
                var regex = new RegExp(key, "g");
                text = text.replace(regex, variables[key]);
            }
        }

        return text;
    }

    //#endregion

    //#region General Utilites
    /**
     * Opens a folder in the system's default file explorer.
     * 
     * @param {string} folderPath - The full path to the folder to be opened.
     * @returns {boolean} - True if the folder was successfully opened, false otherwise.
     */
    function openFolder(folderPath) {
        try {
            var folder = Folder(folderPath);
            var command = ($.os.indexOf("Win") != -1) ? "explorer " + Folder.decode(folder.fsName) : "open \"" + Folder.decode(folder.fsName) + "\"";

            system.callSystem(command);

            return true
        } catch (error) {
            return false
        }
    }

    /**
     * Prints a repeating character with a cyclical pattern.
     * @param {Object} self - The context object to store the call count.
     * @param {string} character - The character to be repeated.
     * @param {number} limit - The maximum number of characters to print before resetting.
     * @returns {string} A string of repeated characters, or an empty string if less than 3 characters would be printed.
     */
    function printRepeatingChar(self, character, limit) {
        if (typeof self.callCount === 'undefined') {
            self.callCount = 0;
        }
        self.callCount++;
        var charCount = self.callCount % limit;
        if (charCount === 0) {
            charCount = limit;
        }

        if (charCount < 3) {
            return "";
        }

        var result = "";
        for (var i = 0; i < charCount; i++) {
            result += character;
        }

        if (self.callCount % limit === 0) {
            self.callCount = 0;
        }
        return result;
    }

    /**
     * Converts an array of format strings into a filter string for use with File.openDialog.
     * 
     * @param {string[]} acceptedFormats - An array of strings representing file formats without the dot prefix.
     * @return {string} A properly formatted string for file filtering in openDialog.
     */
    function buildFileDialogFilter(acceptedFormats) {
        var filterString = "";
        for (var i = 0; i < acceptedFormats.length; i++) {
            if (filterString.length > 0) {
                // Add a semicolon before the next format if it's not the first item.
                filterString += ";";
            }
            // Append the current format as "*.format"
            filterString += "*." + acceptedFormats[i];
        }

        return "Video:" + filterString;
    }

    /**
     * Calculates a duration in months, days, hours, minutes, and seconds between the specified startTime and endTime.
     *
     * @param {number} startTime - The start time in milliseconds since epoch.
     * @param {number} endTime - The end time in milliseconds since epoch.
     * @returns {Object} An object containing the calculated duration:
     * @returns {number} return.months - The number of complete months in the duration.
     * @returns {number} return.days - The number of remaining days after accounting for complete months.
     * @returns {number} return.hours - The number of remaining hours after accounting for complete days.
     * @returns {number} return.minutes - The number of remaining minutes after accounting for complete hours.
     * @returns {number} return.seconds - The number of remaining seconds after accounting for complete minutes.
     * @returns {number} return.total - The total duration in seconds.
     */
    function calculateDuration(startTime, endTime) {
        var totalDuration = (endTime - startTime) / 1000; // Milliseconds to seconds

        var totalSeconds = Math.floor(totalDuration);
        var durationSeconds = totalSeconds % 60;

        var totalMinutes = Math.floor(totalSeconds / 60);
        var durationMinutes = totalMinutes % 60;

        var totalHours = Math.floor(totalMinutes / 60);
        var durationHours = totalHours % 24;

        var totalDays = Math.floor(totalHours / 24);
        var durationDays = totalDays % 30;

        var durationMonths = Math.floor(totalDays / 30);

        return {
            months: durationMonths,
            days: durationDays,
            hours: durationHours,
            minutes: durationMinutes,
            seconds: durationSeconds,
            total: totalDuration,
        };
    }

    /**
     * Formats and quotes a file path according to the current operating system.
     * Optionally adds an extension if provided.
     * @param {string} path - The path to be formatted and quoted.
     * @param {string} [extension] - The optional extension to add (e.g., "exe", "txt").
     * @returns {string} A correctly formatted and quoted path for the current OS.
     */
    function formatPathQuotes(path, extension) {

        // Replace all separators with the correct one for the current OS
        var formattedPath = path.replace(/[\/\\]/g, SYSTEM_SEPARATOR);

        // Add the extension if provided and if the path doesn't already end with it
        if (extension && formattedPath.slice(-extension.length).toLowerCase() !== ("." + extension).toLowerCase()) {
            formattedPath += "." + extension;
        }

        // Quote the formatted path appropriately for the current platform
        if ($.os.indexOf("Windows") !== -1) {
            // On Windows, use double quotes and escape any existing double quotes
            return '"' + formattedPath.replace(/"/g, '\\"') + '"';
        } else {
            // Otherwise, use single quotes and escape any existing single quotes
            return "'" + formattedPath.replace(/'/g, "'\\''") + "'";
        }

    }

    /**
     * Formats a file path according to the current operating system.
     * Optionally adds an extension if provided.
     * @param {string} path - The path to be formatted and quoted.
     * @param {string} [extension] - The optional extension to add
     * @returns {string} A correctly formatted path for the current OS.
     */
    function formatPath(path, extension) {

        // Replace all separators with the correct one for the current OS
        var formattedPath = path.replace(/[\/\\]/g, SYSTEM_SEPARATOR);

        // Add the extension if provided and if the path doesn't already end with it
        if (extension && formattedPath.slice(-extension.length).toLowerCase() !== ("." + extension).toLowerCase()) {
            formattedPath += "." + extension;
        }

        //createPromptWindow("Debug: " + arguments.callee.name, null, [successText()], null); // Debug

        return formattedPath;
    }

    /**
     * Generates a timestamp formatted as a string.
     * @param {number} length - The complexity of the output string.
     * @returns {string} - The formatted timestamp.
     */
    function formatTimestamp(length) {
        var now = new Date();
        var units = [
            now.getFullYear(),
            ('0' + (now.getMonth() + 1)).slice(-2),
            ('0' + now.getDate()).slice(-2),
            ('0' + now.getHours()).slice(-2),
            ('0' + now.getMinutes()).slice(-2),
            ('0' + now.getSeconds()).slice(-2)
        ];

        if (typeof length === 'undefined' || isNaN(length) || length < 1 || length > units.length) {
            length = units.length;
        } else {
            length = Math.floor(length);
        }

        return units.slice(units.length - length).join('-');
    }

    /**
     * Gets the total size in bytes of all files of the specified type in the specified directory.
     * @param {string} dir - The directory to check
     * @param {string} fileType - The file extension to look for (e.g., "gif")
     * @returns {number} Total size in bytes
     */
    function getDirectorySize(dir, fileType) {
        var folder = new Folder(dir);
        var files = folder.getFiles("*." + fileType);
        var bytes = 0;

        for (var i = 0; i < files.length; i++) {
            bytes += files[i].length;
        }

        return bytes;
    }

    /**
     * Formats bytes appropriately.
     * @param {number} bytes - The size in bytes to format
     * @returns {string} Formatted size string (e.g., "1.50 MB")
     */
    function formatBytes(bytes) {
        var units = ["bytes", "KB", "MB", "GB"];
        var i = 0;
        var size = bytes;

        while (size >= 1024 && i < units.length - 1) {
            size /= 1024;
            i++;
        }

        return size.toFixed(2) + " " + units[i];
    }

    /**
     * Replaces the file extension of a given file path with a new extension.
     * @param {File|string} filePath - The file or file path whose extension is to be replaced.
     * @param {string} newExtension - The new file extension to apply (including the dot).
     * @returns {string} - The file name with the new extension.
     */
    function replaceFileExtension(filePath, newExtension) {
        var file = (filePath instanceof File) ? filePath : new File(filePath);
        var fileName = file.name;
        var dotIndex = fileName.lastIndexOf('.');

        if (dotIndex > -1) {
            fileName = fileName.substring(0, dotIndex);
        }

        // // Ensure the new extension starts with a dot
        // if (newExtension.charAt(0) !== '.') {
        //     newExtension = '.' + newExtension;
        // }

        return fileName + newExtension;
    }

    /**
     * Extracts the filename from a full path, removing the extension.
     * @param {String} filePath - The full path to the file.
     * @return {String} The filename without the extension, or the original path if extraction fails.
     */
    function extractFileName(filePath) {
        try {
            var file = new File(filePath);
            var fileNameWithExtension = file.name;
            // Remove the extension from the file name
            var fileName = fileNameWithExtension.replace(/\.[^\.]+$/, '');
            return fileName;
        } catch (e) {
            // Return the original path if any error occurs
            return filePath;
        }
    }

    /**
     * Handles timeclock logging and retrieval of total durations and GIF counts.
     * 
     * @param {number} [duration] - The duration to log, in seconds.
     * @param {number} [gifCount] - The number of GIFs in the batch.
     * @returns {Object} - An object containing the total duration and the total number of GIFs.
     */
    function handleTimeClock(duration, gifCount) {

        var timeclock_log = {
            batch: [],
            totalDuration: 0,
            totalGIFs: 0
        };

        var timeclockPath = getAppDataPath("timeclock", "txt");
        var timeclockFile = new File(timeclockPath);

        if (!timeclockFile.exists) {
            // If the file doesn't exist, create it and write default values
            timeclockFile.open('w');
            timeclockFile.write(JSON.stringify(timeclock_log, null, 2));
            timeclockFile.close();
        }

        // Proceed with reading
        timeclockFile.open('r');
        var timeclockContents = timeclockFile.read();
        timeclockFile.close();

        var parsedTimeclock = JSON.parse(timeclockContents);

        if (typeof duration !== 'undefined' && typeof gifCount !== 'undefined') {
            // If duration and gifCount are passed, append them to the batch and update totals
            parsedTimeclock.batch.push({ duration: duration, gifCount: gifCount });
            parsedTimeclock.totalDuration += duration;
            parsedTimeclock.totalGIFs += gifCount;

            // Write the updated log back to the file
            timeclockFile.open('w');
            timeclockFile.write(JSON.stringify(parsedTimeclock, null, 2));
            timeclockFile.close();
        }

        // Return an object containing the total duration and the total number of GIFs
        return {
            totalDuration: parsedTimeclock.totalDuration,
            totalGIFs: parsedTimeclock.totalGIFs
        };
    }
    //#endregion

    //#region FFmpeg/Gifsicle Utilities
    /**
     * Builds FFMPEG command lines for converting videos to GIFs based on user config.
     * @param {Array} inputFiles - The input video files.
     * @param {string} outputDirectory - The directory where the output GIFs should be saved.
     * @param {object} config - User-configured settings.
     * @returns {Array} - The FFMPEG commands.
     */
    function buildFFMPEGCommand(inputFiles, outputDirectory, config) {
        var commands = [];
        var tempFolderName = SCRIPT_NAME + "_workshop";

        // config.delayFrames = [
        //     [1, 2],
        // ];

        // Ensure delayFrames is properly structured as [[frame, delay], ...]
        config.delayFrames = config.delayFrames || [[0, 1]];
        if (!config.delayFrames[0] || !config.delayFrames[0].length) {
            var newDelayFrames = [];
            for (var d = 0; d < config.delayFrames.length; d++) {
                newDelayFrames.push([d, config.delayFrames[d]]);
            }
            config.delayFrames = newDelayFrames;
        }
    
        for (var i = 0; i < inputFiles.length; i++) {
            var inputFile = inputFiles[i];
            var outputFileName = decodeURIComponent(replaceFileExtension(new File(inputFile), ".gif"));
            global_current_file = decodeURIComponent(replaceFileExtension(new File(inputFile), ""));
            var ffmpegPath = formatPathQuotes(config.ffmpegPath);
            var outputFilePath = outputDirectory + SYSTEM_SEPARATOR + outputFileName;
            var startTime = config.startTime ? "-ss " + config.startTime : "";
            var duration = config.duration ? "-t " + config.duration : "";
            var playbackSpeed = config.playbackSpeed ? "setpts=" + (1 / parseFloat(config.playbackSpeed)) + "*PTS" : "";
            var numColors = config.numColors ? (config.numColors > 256 ? 256 : config.numColors) : "256";
            var numLoops = (config.gifLoopCount === "" || config.gifLoopCount === " " || config.gifLoopCount === "0") ? "0" : config.gifLoopCount;
    
            inputFile = formatPathQuotes(inputFile);
            outputFilePath = formatPathQuotes(outputFilePath);
    
            if (config.delayFrames && config.delayFrames.length > 0) {
                var tempDir = new Folder(outputDirectory + SYSTEM_SEPARATOR + tempFolderName);
                if (!tempDir.exists) {
                    tempDir.create();
                }
    
                // Extract frames
                var extractCmd = ffmpegPath + " -y " + startTime + " -i " + inputFile + " " + duration +
                    " -vsync 1" +
                    " -vf \"" + (playbackSpeed ? playbackSpeed + "," : "") + "fps=" + config.gifFps + "\" " +
                    formatPathQuotes(tempDir.fsName + SYSTEM_SEPARATOR + "frame_%04d.png");
                commands.push(extractCmd);
    
                // Create concat file
                var concatFilePath = tempDir.fsName + SYSTEM_SEPARATOR + "concat.txt";
                var scriptPath = tempDir.fsName + SYSTEM_SEPARATOR + "generate_concat.bat";
                var scriptFile = new File(scriptPath);
                scriptFile.encoding = "UTF8";
                scriptFile.open("w");
    
                var defaultDuration = 1 / config.gifFps;
    
                scriptFile.writeln("@echo off");
                scriptFile.writeln("setlocal enabledelayedexpansion");
                scriptFile.writeln("del \"" + concatFilePath + "\" 2>nul");
                
                // Count frames first
                scriptFile.writeln("set frame_count=0");
                scriptFile.writeln("for %%F in (\"" + tempDir.fsName + SYSTEM_SEPARATOR + "frame_*.png\") do set /a frame_count+=1");
                
                // Create a debug log file
                scriptFile.writeln("echo Frame processing start > \"" + tempDir.fsName + SYSTEM_SEPARATOR + "debug.log\"");
                
                // Process frames
                scriptFile.writeln("set frame=1");
                scriptFile.writeln("for %%F in (\"" + tempDir.fsName + SYSTEM_SEPARATOR + "frame_*.png\") do (");
                scriptFile.writeln("  set /a idx=!frame!-1");
                
                // Log current frame info
                scriptFile.writeln("  echo Processing frame !frame! of !frame_count! >> \"" + tempDir.fsName + SYSTEM_SEPARATOR + "debug.log\"");
                
                scriptFile.writeln("  echo file '%%F' >> \"" + concatFilePath + "\"");
                
                // Always write duration, even for last frame
                scriptFile.writeln("  set \"duration=" + defaultDuration + "\"");
                
                // Check for specific frame delays
                for (var j = 0; j < config.delayFrames.length; j++) {
                    var frameIndex = config.delayFrames[j][0];
                    var delayFactor = config.delayFrames[j][1];
                    scriptFile.writeln("  if !idx!==" + frameIndex + " set \"duration=" + (defaultDuration * delayFactor) + "\"");
                }
                
                // Log the duration being used
                scriptFile.writeln("  echo Frame !frame! duration: !duration! >> \"" + tempDir.fsName + SYSTEM_SEPARATOR + "debug.log\"");
                scriptFile.writeln("  echo duration !duration! >> \"" + concatFilePath + "\"");
                
                scriptFile.writeln("  set /a frame+=1");
                scriptFile.writeln(")");
    
                scriptFile.writeln("echo Processing complete >> \"" + tempDir.fsName + SYSTEM_SEPARATOR + "debug.log\"");
                scriptFile.writeln("type \"" + concatFilePath + "\" >> \"" + tempDir.fsName + SYSTEM_SEPARATOR + "debug.log\"");
                
                scriptFile.close();
    
                // Execute script to generate concat file
                commands.push("cmd /c \"" + scriptPath + "\"");
    
                // Create palette
                var palettePath = formatPathQuotes(tempDir.fsName + SYSTEM_SEPARATOR + "palette.png");
                var paletteCmd = ffmpegPath + " -y -f concat -safe 0 -i " + formatPathQuotes(concatFilePath) +
                    " -vf palettegen=max_colors=" + numColors + " " + palettePath;
                commands.push(paletteCmd);
    
                // Create final GIF with debug option
                var gifCmd = ffmpegPath + " -y -f concat -safe 0 -i " + formatPathQuotes(concatFilePath) +
                    " -i " + palettePath +
                    " -lavfi \"[0:v][1:v]paletteuse=dither=none\" " +
                    " -loop " + numLoops + " " + outputFilePath;
                commands.push(gifCmd);
    
                // Add command to preserve debug log
                commands.push("cmd /c copy \"" + tempDir.fsName + SYSTEM_SEPARATOR + "debug.log\" \"" + outputDirectory + SYSTEM_SEPARATOR + "frame_debug.log\" > nul");
    
                // Cleanup
                commands.push("cmd /c del " + formatPathQuotes(scriptPath));
                commands.push("cmd /c rmdir /s /q " + formatPathQuotes(tempDir.fsName));
            }
            else {
                if (config.gifPaletteGen === 'true') {
                    var palettePath = formatPathQuotes(outputDirectory + SYSTEM_SEPARATOR + "palette.png");
                    var paletteGenCmd = ffmpegPath + " -y " + startTime + " -i " + inputFile +
                        " -vf \"fps=" + config.gifFps + ",scale=" + config.gifScale +
                        ",palettegen=max_colors=" + numColors + "\" " +
                        "-frames:v 1 -update 1 " + palettePath;
                    var paletteUseCmd = ffmpegPath + " -y " + startTime + " -i " + inputFile + " -i " + palettePath +
                        " -filter_complex \"[0:v]" + playbackSpeed + ",fps=" + config.gifFps +
                        ",scale=" + config.gifScale + "[x];[x][1:v]paletteuse\" " +
                        "-loop " + numLoops + " " + outputFilePath + " " + duration;
                    commands.push(paletteGenCmd);
                    commands.push(paletteUseCmd);
                }
                else {
                    var filter = "fps=" + config.gifFps + ",scale=" + config.gifScale +
                        ",split[x][z];[z]palettegen=max_colors=" + numColors + "[p];[x][p]paletteuse";
                    var command = ffmpegPath + " -y " + startTime + " -i " + inputFile +
                        " -filter_complex \"" + playbackSpeed + "," + filter + "\" " +
                        "-loop " + numLoops + " " + outputFilePath + " " + duration;
                    commands.push(command);
                }
            }
        }
    
        return commands;
    }

    /**
     * Executes the provided FFMPEG commands.
     * @param {Array} commands - The FFMPEG commands to execute.
     * @param {Array} inputFiles - The original video files to be converted.
     * @param {Object} config - The conversion settings, defined by the user.
     */
    function executeFFMPEGCommand(commands, inputFiles, config) {
        var logString = "";

        var progressWindowTitle = "Processing GIFS...";
        global_progress_window = createProgressBar(progressWindowTitle, commands.length);
        global_progress_window.window.show();

        var thisNumber = 1;
        var thisItemType = "GIF";

        // Execute each command.
        for (var i = 0; i < commands.length; i++) {
            global_progress_window.window.redraw();

            var newWindowTitle = processingPhrase() + " " + thisItemType + " " + thisNumber + " of " + inputFiles.length;
            global_progress_window.window.updateTitle(newWindowTitle);

            var thisFileName = extractFileName(inputFiles[i]);

            var command = commands[i];

            //var result = system.callSystem(command);
            //var result = doExecuteAsync(command, 50, getAppDataPath(), thisFileName + "_async")
            var result = (ENABLE_ASYNC_EXECUTION === true) ? doExecuteAsync(command, 50, getAppDataPath(), thisFileName + "_async") : system.callSystem(command);

            // TODO Asynchronous execution is working, but causes problems when optimization is enabled (optimization runs before FFMPEG finishes). How can we handle this?

            // When palette generation is enabled, there are two commands per GIF (palette generation and conversion),
            // so the commands array is twice the size of the input array. We adjust calculatedCurrentGIF accordingly:
            if (config.gifPaletteGen === 'true') {
                if (i % 2 === 1) { // Alternate between titles
                    thisNumber = Math.min(thisNumber + 1, inputFiles.length);
                    thisItemType = "palette";
                } else {
                    thisItemType = "GIF";
                }
            } else {
                thisNumber = Math.min(thisNumber + 1, inputFiles.length);
            }

            global_progress_window.window.updateProgress(i + 1);
            logString += "\n" + result + "\n";
        }

        global_progress_window.window.seppuku();

        // Create a log for each processed video, and for the FFMPEG results.
        if (GENERATE_REPORT) {
            logMessage(logString, "_" + SCRIPT_NAME + "-conversion", config, global_output_path);
            for (var i = 0; i < inputFiles.length; i++) {
                logMessage(commands[i], inputFiles[i], config, global_output_path);
            }
        }
    }

    /**
     * Optimizes the output GIFs using Gifsicle.
     * @param {string} gifsiclePath - The path to the Gifsicle executable.
     * @param {string} outputDirectory - The directory where the output GIFs are saved.
     * @param {Array} inputFiles - The original video files that were converted to GIFs.
     * @param {object} config - User-configured settings.
     */
    function optimizeGIFs(outputDirectory, inputFiles, config) {
        var logString = "";

        if (FORCE_OPTIMIZE === false) {
            var userSelection = createPromptWindow("Setup: Optimization", "Attempt to optimize GIFs?\n", ["Yes", "No"], null);
            if (userSelection !== "Yes") {
                return;
            }
        }

        var unoptimizedGIFSize = getDirectorySize(outputDirectory, "gif");

        var progressWindowTitle = "Optimizing GIFs...";
        global_progress_window = createProgressBar(progressWindowTitle, inputFiles.length);
        global_progress_window.window.show();

        var optimizedGIFSuffix = (typeof config.optimizationSuffix !== 'undefined' && config.optimizationSuffix !== "") ? config.optimizationSuffix : "";

        for (var i = 0; i < inputFiles.length; i++) {
            global_progress_window.window.redraw();

            var newTitle = "Optimizing GIF " + (i + 1) + " of " + inputFiles.length;
            global_progress_window.window.updateTitle(newTitle);

            var gifsiclePath = formatPathQuotes(config.gifsiclePath);

            var inputFile = inputFiles[i];
            var inputFilePath = formatPathQuotes(outputDirectory + SYSTEM_SEPARATOR + decodeURIComponent(replaceFileExtension(new File(inputFile), ".gif")));

            var outputFileName = decodeURIComponent(replaceFileExtension(new File(inputFile), optimizedGIFSuffix + ".gif"));
            var outputFilePath = formatPathQuotes(outputDirectory + SYSTEM_SEPARATOR + outputFileName);

            var command = gifsiclePath + " -O3 " + inputFilePath + " --lossy=" + config.lossyLevel + " --dither=" + config.ditheringMethod + " -o " + outputFilePath;

            var result = system.callSystem(command);
            //result = doExecuteAsync(command, 50, getAppDataPath())

            global_progress_window.window.updateProgress(i + 1);

            logString += "\n" + command + "\n" + result + "\n";
        }

        global_progress_window.window.seppuku();

        var optimizedGIFSize = getDirectorySize(outputDirectory, "gif");
        var totalReducedSize = (unoptimizedGIFSize - optimizedGIFSize);

        logString += "\n" + "Original: " + formatBytes(unoptimizedGIFSize) + "\nOptimized: " + formatBytes(optimizedGIFSize) + " (-" + formatBytes(unoptimizedGIFSize - optimizedGIFSize) + ")";

        if (GENERATE_REPORT) {
            logMessage(logString, "_" + SCRIPT_NAME + "-optimization", config, outputDirectory);
        }

        var optimizationResults = {
            unoptimized: unoptimizedGIFSize,
            optimized: optimizedGIFSize,
            reduction: totalReducedSize,
            percentage: ((totalReducedSize / unoptimizedGIFSize) * 100).toFixed(1)
        };

        return optimizationResults;
    }

    /** Runs a command line via a temporary script file(to avoid waiting for the result)
        * @param { string } command - The command to run.
        * @param { number } tempDelay - Optional delay before executing the script, in milliseconds.
        * @param { string } tempPath - Optional path where the temporary script file will be created.Defaults to the system's temp folder.
        * @param { string } tempName - Optional name for the temporary script file.
    */
    function doExecuteAsync(command, tempDelay, tempPath, tempName) {
        // Fallback name
        var tempFileName = tempName ? tempName : SCRIPT_NAME + "_async";

        // Optional delay before executing the script
        if (tempDelay) {
            $.sleep(tempDelay);
        }

        // Determine the OS
        var thisOS;
        if ($.os.indexOf("Windows") !== -1) {
            thisOS = "Windows";
        } else if ($.os.indexOf("Mac") !== -1) {
            thisOS = "Mac";
        } else {
            throw new Error("Unsupported OS");
        }

        // Define script file format based on OS
        var scriptFileFormat = thisOS === "Windows" ? '.bat' : '.command';
        var tempPath;
        if (tempPath && Folder(tempPath).exists) {
            tempPath = tempPath;
        } else {
            tempPath = Folder.temp.fsName;
        }

        // Create the script file
        var scriptFile = new File(tempPath + "/" + tempFileName + scriptFileFormat);
        scriptFile.open('w');
        scriptFile.encoding = 'UTF-8';
        scriptFile.lineFeed = 'Unix';
        scriptFile.write(command);
        scriptFile.close();

        // Execute the script file
        if (thisOS === "Windows") {
            var launchScriptFile = new File(tempPath + '/' + tempFileName + '_execute.vbs');
            var launchScriptFileStr = 'Set WshShell = CreateObject("WScript.Shell")' + '\r' +
                'WshShell.Run chr(34) & "' + scriptFile.fsName.replace(/\\/g, "\\\\") + '" & Chr(34), 0' + '\r' +
                'Set WshShell = Nothing';
            launchScriptFile.open('w');
            launchScriptFile.write(launchScriptFileStr);
            launchScriptFile.close();
            if (launchScriptFile.exists) {
                launchScriptFile.execute();
            } else {
                createPromptWindow(errorText(), "Falling back to callSystem()", ["OK"], null);
                system.callSystem('explorer ' + scriptFile.fsName);
            }
        } else if (thisOS === "Mac") {
            system.callSystem('chmod +x ' + scriptFile.fsName.replace(/ /g, "\\ "));
            scriptFile.execute();
        }

        // Delay before removing the script file
        var sleepBeforeRemove = thisOS === "Mac" ? 2000 : 500;
        $.sleep(sleepBeforeRemove);
        scriptFile.remove();

        // Remove the launch script on Windows
        if (thisOS === "Windows" && launchScriptFile.exists) {
            launchScriptFile.remove();
        }

        if (GENERATE_REPORT) {
            logMessage(launchScriptFileStr, "_" + SCRIPT_NAME + "-async", global_config_object, global_output_path);
        }
    }
    //#endregion

    //#region Main Entry
    /**
     * Main function to handle user interactions and processing.
     * @param {object} config - The configuration object
     */
    function gifpt_main(config) {
        var startTime = new Date().getTime();

        if (!config) {
            createPromptWindow(errorText(), "Script initialization failed. Please try again." + "\n", ["OK"], null);
        }

        // If only one file is selected, create an array with it
        // This variable is local to avoid accidentally re-converting an old batch
        var inputFiles = global_input_path instanceof Array ? global_input_path : [global_input_path];

        var commands = buildFFMPEGCommand(inputFiles, global_output_path, config);
        executeFFMPEGCommand(commands, inputFiles, config);

        if (config.gifPaletteGen === 'true') {
            var paletteFile = new File(global_output_path + "/palette.png");
            if (paletteFile.exists) {
                paletteFile.remove();
            }
        }

        // Optimize the output GIFs, optionally
        if (config.enableOptimization === 'true') {
            var optimizationDetails = optimizeGIFs(global_output_path, inputFiles, config);
        }

        var endTime = new Date().getTime();
        var final_duration = calculateDuration(startTime, endTime);

        handleTimeClock(final_duration.total, inputFiles.length);

        var successMessage = "Done!\n" + inputFiles.length + " GIF" + (inputFiles.length === 1 ? "" : "s") + " created in " + (final_duration.minutes > 0 ? final_duration.minutes + " minutes and " : "") + final_duration.seconds.toFixed(1) + " seconds.";

        if (successMessage) {
            createPromptWindow(successText(), successMessage + "\n\n", ["Thank you!"], null, "Close");
            global_progress_window.window.update();
            global_progress_window.window.seppuku();
        }
    }

    INITIALIZATION_ERROR ? createPromptWindow(SCRIPT_NAME + ": Initialization", "Not all dependencies could be located.\nI'll still try my best!" + "\n", ["OK"], null) : null;

    createUI(thisObj);
    //#endregion
}

gifpt(this)

