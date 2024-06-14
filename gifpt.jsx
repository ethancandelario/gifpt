// Parameters
var GENERATE_REPORT = true;
var SAVE_SETTINGS = false;

/**
 * Returns a randomized exclamation.
 */
function errorText() {
    var exclamations = [
        "Uh-oh...",
        "Oops!",
        "Yikes!",
        "Hmm...",
        "Whoops!",
        "Ah!",
        "Oh dear...",
        "Drat!",
        "Oopsie!",
        "Ugh...",
        "Oh geez...",
        "Hey, so...",
        "Oh no...",
        "Please don't be mad at me...",
        "Hey, " + $.getenv("USERNAME") + "...",
        "Now " + $.getenv("USERNAME") + "..."
    ];
    var randomIndex = Math.floor(Math.random() * exclamations.length);
    return exclamations[randomIndex];
}

/**
 * Returns a randomized exclamation.
 */
function successText() {
    var confirmations = [
        "Success!",
        "Done.",
        "All clear.",
        "Finished.",
        "No issues.",
        "All set.",
        "Processed.",
        "Confirmed.",
        "We did it!",
        "We did it, " + $.getenv("USERNAME") + "!"
    ];
    var randomIndex = Math.floor(Math.random() * confirmations.length);
    return confirmations[randomIndex];
}

/**
 * Cleans a given string by removing leading and trailing whitespaces.
 * @param {string} str - The string to be cleaned.
 * @returns {string} - The cleaned string.
 */
function cleanString(str) {
    if (str) {
        return str.replace(/^\s+|\s+$/g, '');  // Regex to remove leading and trailing whitespace
    }
    return '';
}

/**
 * Replaces the file extension of a given file path with a new extension.
 * @param {File} filePath - The file whose extension is to be replaced.
 * @param {string} newExtension - The new file extension to apply.
 * @returns {string} - The file name with the new extension.
 */
function replaceFileExtension(filePath, newExtension) {
    var fileName = filePath.name;
    var dotIndex = fileName.lastIndexOf('.');
    if (dotIndex > -1) {
        fileName = fileName.substring(0, dotIndex);
    }
    return fileName + newExtension;
}

/**
 * Extracts the filename from a full path, removing the extension.
 * @param {String} filePath - The full path to the file.
 * @return {String} The filename without the extension, or the original path if extraction fails.
 */
function extractFileName(filePath) {
    try {
        // Extract the last segment after the last slash
        var fileNameWithExtension = filePath.match(/[^\\\/]+$/)[0];
        // Remove the extension from the file name
        var fileName = fileNameWithExtension.replace(/\.[^\.]+$/, '');
        return fileName;
    } catch (e) {
        // Return the original path if any error occurs
        return filePath;
    }
}

/**
 * Generates a timestamp formatted as a string.
 * @returns {string} - The formatted timestamp.
 */
function getFormattedTimestamp() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);
    return year + "-" + month + "-" + day + "-" + hours + "-" + minutes + "-" + seconds;
}

/**
 * Displays a custom dialog window for input or selections.
 * @param {string} title - The title of the dialog window.
 * @param {string} message - The message to be displayed.
 * @param {string[]} choices - An array of string choices for buttons (null if text input is needed).
 * @param {string} defaultValue - Default text value if applicable.
 * @returns {string|null} - The value entered or chosen by the user, or null if cancelled.
 */
function createPromptWindow(title, message, choices, defaultValue) {
    var win = new Window("dialog", title, undefined, { resizeable: true });
    win.orientation = "column";
    win.alignChildren = ["fill", "fill"];
    win.spacing = 10;
    win.margins = 25;

    // Event handler for resizing the window
    win.onResize = function () {
        this.layout.resize();
    };

    var messageText = win.add("statictext", undefined, message, { multiline: true });

    var input = null;

    if (choices) {
        var buttonGroup = win.add("group");
        buttonGroup.orientation = "row";
        buttonGroup.alignChildren = ["fill", "center"];
        for (var i = 0; i < choices.length; i++) {
            var choice = choices[i];
            var btn = buttonGroup.add("button", undefined, choice);
            btn.onClick = function () {
                input = this.text;
                win.close();
            };
        }
    }

    else {
        var inputGroup = win.add("group");
        inputGroup.orientation = "row";
        inputGroup.alignChildren = ["fill", "center"];
        var inputField = inputGroup.add("edittext", undefined, defaultValue);
        inputField.characters = 50;

        var okButton = win.add("button", undefined, "OK");
        okButton.onClick = function () {
            input = inputField.text;
            win.close();
        };
    }

    var actionGroup = win.add("group");
    actionGroup.orientation = "row";
    actionGroup.alignChildren = ["fill", "center"];

    var cancelButton = actionGroup.add("button", undefined, "Cancel");
    cancelButton.onClick = function () {
        win.close();
    };

    win.center();
    win.show();
    return input;
}

/**
 * Logs a message to a log file, with a timestamp and the name of the associated file.
 * @param {string} message - The message to log.
 * @param {string} outputFile - The path to the output file associated with the log.
 */
function logMessage(message, outputFile) {
    var outputFileName = extractFileName(outputFile);
    var timestamp = getFormattedTimestamp();
    var scriptPath = File($.fileName).path;
    var logFolderPath = scriptPath + "/log";
    var logFilePath = logFolderPath + "/" + outputFileName + "_" + timestamp + "_log.txt";

    var logFolder = new Folder(logFolderPath);

    // Create the log folder if it doesn't exist
    if (!logFolder.exists) {
        if (!logFolder.create()) {
            alert("Failed to create log folder: " + logFolderPath, errorText());
            return;
        }
    }

    var logFile = new File(logFilePath);

    // Open the file in write mode and log the message
    if (logFile.open('w')) {
        logFile.writeln(message);
        logFile.close();
    } else {
        alert("Failed to open log file for writing: " + logFilePath, errorText());
    }
}

/**
 * Initializes the configuration by loading existing settings or prompting the user for new ones.
 * @param {string} filePath - The path to the configuration file.
 * @param {object} configDefinitions - Definitions of config settings including type, default values, and descriptions.
 * @returns {object|null} - The initialized configuration or null if critical config is missing.
 */
function initializeConfig(filePath, configDefinitions) {
    var config = loadConfig(filePath);
    var changesMade = false;

    for (var key in configDefinitions) {
        if (!config[key]) {
            var valueType = configDefinitions[key].type;
            var defaultValue = configDefinitions[key]['default'] || '';
            var description = configDefinitions[key].description;
            var userValue = promptForValue(key, valueType, defaultValue, description);
            if (userValue !== null) {
                config[key] = userValue;
                changesMade = true;
            } else {
                alert(key + " is required to proceed.", errorText());
                return null;  // Early exit if critical config is missing
            }
        }
    }

    if (changesMade) {
        saveConfig(filePath, config, configDefinitions);
    }

    return config;
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
        while (!configFile.eof) {
            var line = configFile.readln();
            var parts = line.split(',');
            if (parts.length == 2) {
                var key = cleanString(parts[0]);
                var value = cleanString(parts[1]);
                config[key] = value;
            }
        }
        configFile.close();
    }
    return config;
}

/**
 * Saves configuration settings to a file.
 * @param {string} filePath - The path to the configuration file.
 * @param {object} config - The configuration settings to save.
 * @param {object} configDefinitions - Definitions of config settings including writeToConfig field.
 */
function saveConfig(filePath, config, configDefinitions) {
    var configFile = new File(filePath);
    configFile.open('w');
    for (var key in config) {
        if (config.hasOwnProperty(key) && configDefinitions[key].writeToConfig) {
            configFile.writeln(key + ',' + config[key]);
        }
    }
    configFile.close();
}

/**
 * Prompts the user for a value for a given configuration key, using a custom dialog window.
 * @param {string} key - The configuration key.
 * @param {string} valueType - The type of value (path, boolean, text).
 * @param {string} defaultValue - The default value.
 * @param {string} description - Description of what the configuration key affects.
 * @returns {string|null} - The user-provided value or null if none.
 */
function promptForValue(key, valueType, defaultValue, description) {
    var promptMessage = description + "\n\n" + "Please enter the value for " + key + " (Default: " + defaultValue + "):";

    switch (valueType) {
        case 'path':
            var fileObj = File.openDialog("Please locate: " + key, undefined);
            return fileObj ? fileObj.fsName : null;
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
    var choices = ["Select File(s)", "Select Directory"];
    var userChoice = createPromptWindow("Setup: Video Input", "Would you like to select individual files or a directory?", choices, null);

    if (userChoice === "Select File(s)") {
        var videoInput = File.openDialog("Select video file(s) for conversion.", undefined, true);
        if (videoInput) {
            if (videoInput instanceof File) {
                return [videoInput.fsName];
            } else if (videoInput instanceof Array) {
                return videoInput.filter(function (file) {
                    return file instanceof File && file.name.match(/\.(mp4|mov)$/i);
                }).map(function (file) { return file.fsName; });
            }
        }
    } else if (userChoice === "Select Directory") {
        var videoInput = Folder.selectDialog("Select a directory containing video(s) for conversion.");
        if (videoInput) {
            return videoInput.getFiles(function (file) {
                return file instanceof File && file.name.match(/\.(mp4|mov)$/i);
            }).map(function (file) { return file.fsName; });
        }
    }

    alert("No video input selected. Exiting.", errorText());
    return null;
}

/**
 * Prompts the user to select a directory to save the output GIFs.
 * @returns {string|null} - The selected directory or null if none.
 */
function promptForOutputDirectory() {
    var outputDirectory = Folder.selectDialog("Select a directory to save the output GIFs.");
    return outputDirectory ? outputDirectory.fsName : null;
}

/**
 * Executes the provided FFMPEG commands.
 * @param {Array} commands - The FFMPEG commands to execute.
 */
function executeFFMPEGCommand(commands, inputFiles) {
    for (var i = 0; i < commands.length; i++) {
        var command = commands[i];
        var result = system.callSystem(command);
        if (result && GENERATE_REPORT) {
            logMessage(result, inputFiles[i]);
        }
    }
}

/**
 * Replaces the file extension of a given file path with a new extension.
 * @param {File} filePath - The file whose extension is to be replaced.
 * @param {string} newExtension - The new file extension to apply.
 * @returns {string} - The file name with the new extension.
 */
function replaceFileExtension(filePath, newExtension) {
    var fileName = filePath.name;
    var dotIndex = fileName.lastIndexOf('.');
    if (dotIndex > -1) {
        fileName = fileName.substring(0, dotIndex);
    }
    return fileName + newExtension;
}

/**
 * Builds FFMPEG command lines for converting videos to GIFs based on user config.
 * @param {string} ffmpegPath - The path to the FFMPEG executable.
 * @param {Array} inputFiles - The input video files.
 * @param {string} outputDirectory - The directory where the output GIFs should be saved.
 * @param {object} config - User-configured settings.
 * @returns {Array} - The FFMPEG commands.
 */
function buildFFMPEGCommand(ffmpegPath, inputFiles, outputDirectory, config) {
    var commands = [];
    for (var i = 0; i < inputFiles.length; i++) {
        var inputFile = inputFiles[i];
        var outputFileName = decodeURIComponent(replaceFileExtension(new File(inputFile), ".gif"));
        var outputFilePath = outputDirectory + "/" + outputFileName;
        var startTime = config.startTime ? "-ss " + config.startTime : "";
        var duration = config.duration ? "-t " + config.duration : "";
        var playbackSpeed = config.playbackSpeed ? "setpts=" + (1 / parseFloat(config.playbackSpeed)) + "*PTS" : "";
        var numColors = config.numColors ? config.numColors : "256"; // Default to 256 if not specified.

        // Ensure file paths are properly quoted to handle spaces
        inputFile = "\"" + inputFile + "\"";
        var palettePath = "\"" + outputDirectory + "/palette.png\"";
        outputFilePath = "\"" + outputFilePath + "\"";

        if (config.gifPaletteGen === 'true') {
            var paletteGenCmd = ffmpegPath + " -y " + startTime + " -i " + inputFile + " -vf \"palettegen=max_colors=" + numColors + "\" " + palettePath + " -update 1";
            var paletteUseCmd = ffmpegPath + " -y " + startTime + " -i " + inputFile + " -i " + palettePath + " -filter_complex \"[0:v]" + playbackSpeed + ",fps=" + config.gifFps + ",scale=" + config.gifScale + " [x];[x][1:v] paletteuse\" -loop " + config.gifLoopCount + " -compression_level " + config.gifCompressionLevel + " " + outputFilePath + " " + duration;

            commands.push(paletteGenCmd);
            commands.push(paletteUseCmd);
        } else {
            var filter = "fps=" + config.gifFps + ",scale=" + config.gifScale + ",split[x][z];[z]palettegen=max_colors=" + numColors + "[p];[x][p]paletteuse";
            var command = ffmpegPath + " -y " + startTime + " -i " + inputFile + " -vf \"" + playbackSpeed + "," + filter + "\" -loop " + config.gifLoopCount + " -compression_level " + config.gifCompressionLevel + " " + outputFilePath + " " + duration;
            commands.push(command);
        }
    }
    return commands;
}


/**
 * Main function to handle user interactions and processing.
 */
function main() {

    var startTime = new Date().getTime();

    // Configuration definitions
    var configDefinitions = {
        'ffmpegPath': {
            type: 'path',
            description: 'Locate the path to the FFMPEG executable.',
            writeToConfig: true
        },
        'gifScale': {
            type: 'text',
            'default': '-1:-1',
            description: 'Resolution for the output GIF. Specify as width:height (e.g., 320:240).\n\nUse -1 for width or height to automatically adjust that dimension to maintain the aspect ratio based on the other value.\n\nSetting both to -1 will use the original video’s resolution.',
            writeToConfig: SAVE_SETTINGS
        },
        'gifFps': {
            type: 'text',
            'default': '12',
            description: 'Frame rate of the output GIF.',
            writeToConfig: SAVE_SETTINGS
        },
        'numColors': {
            type: 'text',
            'default': '256',
            description: 'Maximum number of colors for the GIF. Lower values like 128 can reduce file size but may cause color banding. Values can be set from 1 to 256.',
            writeToConfig: SAVE_SETTINGS
        },
        'gifPaletteGen': {
            type: 'boolean',
            'default': 'true',
            description: 'Whether to generate a custom color palette for each GIF. True enhances color quality, especially for complex videos.\n\nFalse uses a standard palette, which may reduce quality but speeds up processing.',
            writeToConfig: SAVE_SETTINGS
        },
        'gifCompressionLevel': {
            type: 'text',
            'default': '0',
            description: 'GIF compression level from 0 (no compression, high quality, large file size) to 100 (maximum compression, lower quality, smaller file size).\n\nAdjust according to the desired balance between image quality and file size.',
            writeToConfig: SAVE_SETTINGS
        },
        'gifLoopCount': {
            type: 'text',
            'default': '0',
            description: 'Number of loops for the GIF playback. Set to 0 for infinite.',
            writeToConfig: SAVE_SETTINGS
        },
        'playbackSpeed': {
            type: 'text',
            'default': '1.0',
            description: 'Playback speed multiplier. Use values over 1.0 to speed up the GIF, and under 1.0 to slow it down.',
            writeToConfig: SAVE_SETTINGS
        },
        'startTime': {
            type: 'text',
            'default': '0',
            description: 'Time (in seconds) from the beginning of the video to start processing.',
            writeToConfig: SAVE_SETTINGS
        },
        'duration': {
            type: 'text',
            'default': '',
            description: 'Duration (in seconds) of the video clip to convert into a GIF.\n\nLeave blank to convert the entire video.',
            writeToConfig: SAVE_SETTINGS
        },
    };

    var configFilePath = File($.fileName).path + "/config.csv";
    var config = initializeConfig(configFilePath, configDefinitions);
    if (!config) {
        alert("Script initialization failed. Exiting.", errorText());
        return;
    }

    var videoInput = promptForVideoInput();
    if (!videoInput) return; // Exit if no video input

    var outputDirectory = promptForOutputDirectory();
    if (!outputDirectory) {
        alert("Output directory is required to proceed. Exiting.", errorText());
        return;
    }

    var inputFiles = videoInput instanceof Array ? videoInput : [videoInput];
    var commands = buildFFMPEGCommand(config.ffmpegPath, inputFiles, outputDirectory, config);
    executeFFMPEGCommand(commands, inputFiles);

    var endTime = new Date().getTime();

    var totalDuration = (endTime - startTime) / 1000;
    var durationMinutes = Math.floor(totalDuration / 60);
    var durationSeconds = totalDuration % 60;

    // Cleanup step to remove the palette.png if it exists
    if (config.gifPaletteGen === 'true') {
        var paletteFile = new File(outputDirectory + "/palette.png");
        if (paletteFile.exists) {
            paletteFile.remove();
        }
    }

    alert(successText() + " Video conversion to GIFs completed in " + durationMinutes + " minutes and " + durationSeconds.toFixed(2) + " seconds.", successText());
}

main();