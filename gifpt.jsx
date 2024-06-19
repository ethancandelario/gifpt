// Parameters
var GENERATE_REPORT = true;
var SAVE_SETTINGS = true;
var SCRIPT_NAME = "gifpt";

// Global Variables
var USER_NAME = $.getenv("USERNAME");
var LAST_UPDATED = "24.06.19";
var successMessage = "";
var global_progress_window;
var configFilePath, config, configDefinitions;

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
        "Hey, " + USER_NAME + "...",
        "Now " + USER_NAME + "..."
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
        "We did it, " + USER_NAME + "!"
    ];
    var randomIndex = Math.floor(Math.random() * confirmations.length);
    return confirmations[randomIndex];
}

/**
 * Returns a randomized processing phrase.
 */
function processingPhrase() {
    var phrases = [
        "Munching",
        "Converting",
        "Processing",
        "Thinking about",
        "Pondering",
        "Visualizing",
        "Transforming",
        "Evaluating",
        "Reviewing",
        "Interpreting",
        "Assessing",
        "Breaking down",
        "Sifting through",
        "Tackling",
        "Digesting",
        "Scrutinizing",
        "Filtering",
        "Parsing",
        "Handling",
        "Understanding",
        "Deciphering",
        "Mastering",
        "Refining",
        "Polishing",
        "Composing",
        "Designing",
        "Developing",
        "Orchestrating",
        "Enhancing",
        "Perfecting",
        "Doing my best on",
        "(Not Responding) on",
        "(Not Responding) over",
        "(Not Responding) about",
        USER_NAME + "'s favorite:",
        USER_NAME + "'s least favorite:"

    ];
    var randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

/**
 * Cleans a given string by removing leading and trailing whitespaces.
 * @param {string} str - The string to be cleaned.
 * @returns {string} - The cleaned string.
 */
function cleanString(str) {
    if (str) {
        var cleanedStr = str.replace(/^\s+|\s+$/g, ''); // Regex to remove leading and trailing whitespace
        return cleanedStr
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
 * @param {string} cancelText - The text for the window's close button.
 * @returns {string|null} - The value entered or chosen by the user, or null if cancelled.
 */
function createPromptWindow(title, message, choices, defaultValue, cancelText) {
    var win = new Window("dialog", title, undefined, { resizeable: true });
    win.orientation = "column";
    win.alignChildren = ["fill", "fill"];
    win.spacing = 10;
    win.margins = 25;
    win.preferredSize = [300, 20];

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
    } else {
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

    var cancelButton = actionGroup.add("button", undefined, cancelText ? cancelText : "Cancel");
    cancelButton.onClick = function () {
        win.close();
    };

    win.center();
    win.show();
    return input;
}


/**
 * Logs a message to a log file, with a timestamp, the name of the associated file, and appends the config content.
 * @param {string} message - The message to log.
 * @param {string} logFileName - A string to label the log with.
 * @param {object} config - The configuration settings to append.
 */
function logMessage(message, logFileName, config) {

    var outputFileName = extractFileName(logFileName);

    var timestamp = getFormattedTimestamp();
    var scriptPath = File($.fileName).path;
    var logFolderPath = scriptPath + "/log";
    var logFilePath = logFolderPath + "/" + outputFileName + "_" + timestamp + "_log.txt";
    var logFolder = new Folder(logFolderPath);

    // Create the log folder if it doesn't exist
    if (!logFolder.exists) {
        if (!logFolder.create()) {
            createPromptWindow(errorText(), "Failed to create log folder: " + logFolderPath + "\n", ["Try again..."], null);
            return;
        }
    }

    var logFile = new File(logFilePath);

    if (logFile.open('w')) {
        var configContent = JSON.stringify(config, null, 4);
        logFile.writeln("Configuration Settings:\n" + configContent + "\n\nLogged Messages:");
        logFile.writeln(message);
        logFile.close();
    } else {
        createPromptWindow(errorText(), "Failed to open log file for writing: " + logFilePath + "\n", ["Try again..."], null);
    }
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
                    return file instanceof File && file.name.match(/\.(mp4|mov|avi)$/i);
                }).map(function (file) { return file.fsName; });
            }
        }
    } else if (userChoice === "Select Directory") {
        var videoInput = Folder.selectDialog("Select a directory containing video(s) for conversion.");
        if (videoInput) {
            return videoInput.getFiles(function (file) {
                return file instanceof File && file.name.match(/\.(mp4|mov|avi)$/i);
            }).map(function (file) { return file.fsName; });
        }
    }

    createPromptWindow(errorText(), "No video input selected. Exiting." + "\n", ["Try again..."], null);
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
 * Optimizes the output GIFs using Gifsicle.
 * @param {string} gifsiclePath - The path to the Gifsicle executable.
 * @param {string} outputDirectory - The directory where the output GIFs are saved.
 * @param {Array} inputFiles - The original video files that were converted to GIFs.
 * @param {object} config - User-configured settings.
 */
function optimizeGIFs(gifsiclePath, outputDirectory, inputFiles, config) {
    var userSelection = createPromptWindow("Setup: Optimization", "Attempt to optimize GIFS?\n", ["Yes", "No"], null);
    var loggedGifsicleCommands = "";

    if (userSelection !== "Yes") {
        return;
    }

    for (var i = 0; i < inputFiles.length; i++) {
        var inputFile = inputFiles[i];
        var outputFileName = decodeURIComponent(replaceFileExtension(new File(inputFile), "_optimized.gif"));
        var inputFilePath = "\"" + outputDirectory + "/" + decodeURIComponent(replaceFileExtension(new File(inputFile), ".gif")) + "\"";
        var outputFilePath = "\"" + outputDirectory + "/" + outputFileName + "\"";

        var gifsicleCommand = gifsiclePath + " -O3 " + inputFilePath + " --lossy=" + config.lossyLevel + " --dither=" + config.ditheringMethod + " -o " + outputFilePath;

        var result = system.callSystem(gifsicleCommand);
        loggedGifsicleCommands += "\n" + gifsicleCommand + "\n";
    }

    if (GENERATE_REPORT) {
        logMessage(loggedGifsicleCommands, SCRIPT_NAME + "_optimized", config);
    }
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

        inputFile = "\"" + inputFile + "\"";
        var palettePath = "\"" + outputDirectory + "/palette.png\"";
        outputFilePath = "\"" + outputFilePath + "\"";

        if (config.gifPaletteGen === 'true') {
            var paletteGenCmd = ffmpegPath + " -y " + startTime + " -i " + inputFile + " -vf \"palettegen=max_colors=" + numColors + "\" " + palettePath;
            var paletteUseCmd = ffmpegPath + " -y " + startTime + " -i " + inputFile + " -i " + palettePath + " -filter_complex \"[0:v]" + playbackSpeed + ",fps=" + config.gifFps + ",scale=" + config.gifScale + " [x];[x][1:v] paletteuse\" -loop " + config.gifLoopCount + " " + outputFilePath + " " + duration;

            commands.push(paletteGenCmd);
            commands.push(paletteUseCmd);
        }
        else {
            var filter = "fps=" + config.gifFps + ",scale=" + config.gifScale + ",split[x][z];[z]palettegen=max_colors=" + numColors + "[p];[x][p]paletteuse";
            var command = ffmpegPath + " -y " + startTime + " -i " + inputFile + " -vf \"" + playbackSpeed + "," + filter + "\" -loop " + config.gifLoopCount + " " + outputFilePath + " " + duration;
            commands.push(command);
        }
    }

    return commands;
}

/**
 * Creates a progress bar window.
 * @param {string} title - The title of the progress bar window.
 * @param {number} maxValue - The maximum value of the progress bar.
 * @returns {Object} An object containing the progress bar and the window.
 */
function createProgressBar(title, maxValue) {

    var progress_bar_window = new Window("palette", title, undefined, {closeButton: false, independent: true});
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
 * Executes the provided FFMPEG commands.
 * @param {Array} commands - The FFMPEG commands to execute.
 * @param {Array} inputFiles - The original video files to be converted.
 * @param {Array} config - The conversion settings, defined by the user.
 */
function executeFFMPEGCommand(commands, inputFiles, config) {
    var loggedFFMPEGCommands = "";

    var progressWindowTitle = "Processing gifs...";
    global_progress_window = createProgressBar(progressWindowTitle, commands.length);
    global_progress_window.window.show();

    // Execute each command.
    for (var i = 0; i < commands.length; i++) {

        global_progress_window.window.redraw();

        var newTitle = processingPhrase() + " GIF " + (i + 1) + " of " + commands.length;
        global_progress_window.window.updateTitle(newTitle);

        var command = commands[i];
        var result = system.callSystem(command);

        global_progress_window.window.updateProgress(i + 1);

        loggedFFMPEGCommands += "\n" + result + "\n";
    }

    // Hopefully, hide the window.
    // If the script goes non-responsive during GIF processing, sometimes the window will become stuck.
    // Running this script again (and canceling) works as a quick fix.
    global_progress_window.window.seppuku();

    // Create a log for each processed video, and for the FFMPEG results.
    if (GENERATE_REPORT) {
        logMessage(loggedFFMPEGCommands, SCRIPT_NAME, config);
        for (var i = 0; i < inputFiles.length; i++) {
            logMessage(commands[i], inputFiles[i], config);
        }
    }

}

/**
 * Initializes the configuration by loading existing settings or prompting the user for new ones.
 * @param {string} filePath - The path to the configuration file.
 * @param {object} configDefinitions - Definitions of config settings including type, default values, descriptions, and allowBlank.
 * @returns {object|null} - The initialized configuration or null if critical config is missing.
 */
function initializeConfig(filePath, configDefinitions) {
    var config = loadConfig(filePath);
    var changesMade = false;

    for (var key in configDefinitions) {
        if (!config[key] && !(configDefinitions[key].allow_blank && config[key] === '')) {
            var valueType = configDefinitions[key].type;
            var defaultValue = configDefinitions[key]['default'] || '';
            var description = configDefinitions[key].desc;
            var userValue = promptForValue(key, valueType, defaultValue, description);
            if (userValue !== null) {
                config[key] = userValue;
                changesMade = true;
            } else if (!configDefinitions[key].allow_blank) {
                createPromptWindow(errorText(), key + " is required to proceed." + "\n", ["OK"], null);
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
 * @param {object} configDefinitions - Definitions of config settings including write_to_config field.
 */
function saveConfig(filePath, config, configDefinitions) {
    var configFile = new File(filePath);
    configFile.open('w');
    for (var key in config) {
        if (config.hasOwnProperty(key) && configDefinitions[key].write_to_config) {
            configFile.writeln(key + ',' + config[key]);
        }
    }
    configFile.close();
}

/**
 * Clears fragile values from the configuration settings if the user confirms.
 * @param {string} filePath - The path to the configuration file.
 * @param {object} config - The current configuration settings.
 * @param {object} configDefinitions - Definitions of config settings including fragile field.
 */
function cleanConfig(filePath, config, configDefinitions) {
    var userSelection = createPromptWindow(successText(), "Reset config settings?\n", ["Yes"], null, "No");

    if (userSelection === "Yes") {
        for (var key in configDefinitions) {
            if (configDefinitions[key].fragile) {
                delete config[key];
            }
        }
        saveConfig(filePath, config, configDefinitions);
    }
}

/**
 * Main function to handle user interactions and processing.
 */
function main() {

    var startTime = new Date().getTime();

    // GIF Conversion Parameters
    configDefinitions = {
        'ffmpegPath': {
            type: 'path',
            desc: 'Locate the path to the FFMPEG executable.',
            write_to_config: true,
            allow_blank: false,
            fragile: false,
        },
        'gifsiclePath': {
            type: 'path',
            desc: 'Locate the path to the gifsicle executable.',
            write_to_config: true,
            allow_blank: false,
            fragile: false,
        },
        'gifScale': {
            type: 'text',
            'default': '-1:-1',
            desc: 'Resolution for the output GIF. Specify as width:height (e.g., 320:240).\n\nUse -1 for width or height to automatically adjust that dimension to maintain the aspect ratio based on the other value.\n\nSetting both to -1 will use the original video’s resolution.',
            write_to_config: SAVE_SETTINGS,
            allow_blank: false,
            fragile: true,
        },
        'gifFps': {
            type: 'text',
            'default': '12',
            desc: 'Frame rate of the output GIF.',
            write_to_config: SAVE_SETTINGS,
            allow_blank: false,
            fragile: true,
        },
        'numColors': {
            type: 'text',
            'default': '256',
            desc: 'Maximum number of colors for the GIF. Lower values like 128 can reduce file size but may cause color banding. Values can be set from 1 to 256.',
            write_to_config: SAVE_SETTINGS,
            allow_blank: false,
            fragile: true,
        },
        'gifPaletteGen': {
            type: 'boolean',
            'default': 'true',
            desc: 'Whether to generate a custom color palette for each GIF. True enhances color quality, especially for complex videos.\n\nFalse uses a standard palette, which may reduce quality but speeds up processing.',
            write_to_config: SAVE_SETTINGS,
            allow_blank: false,
            fragile: true,
        },
        'gifLoopCount': {
            type: 'text',
            'default': '0',
            desc: 'Number of loops for the GIF playback. Set to 0 for infinite.',
            write_to_config: SAVE_SETTINGS,
            allow_blank: false,
            fragile: true,
        },
        'playbackSpeed': {
            type: 'text',
            'default': '1.0',
            desc: 'Playback speed multiplier. Use values over 1.0 to speed up the GIF, and under 1.0 to slow it down.',
            write_to_config: SAVE_SETTINGS,
            allow_blank: false,
            fragile: true,
        },
        'startTime': {
            type: 'text',
            'default': '0',
            desc: 'Time (in seconds) from the beginning of the video to start processing.',
            write_to_config: SAVE_SETTINGS,
            allow_blank: false,
            fragile: true,
        },
        'duration': {
            type: 'text',
            'default': '',
            desc: 'Duration (in seconds) of the video clip to convert into a GIF.\nLeave blank to convert the entire video.',
            write_to_config: SAVE_SETTINGS,
            allow_blank: true,
            fragile: true,
        },
        'lossyLevel': {
            type: 'text',
            'default': '100',
            desc: 'Level of lossy compression for Gifsicle. Values can be set from 0 to 100.',
            write_to_config: SAVE_SETTINGS,
            allow_blank: false,
            fragile: true,
        },
        'ditheringMethod': {
            type: 'text',
            'default': 'ordered',
            desc: 'Dithering method for Gifsicle. Options: ordered, floyd-steinberg, ro64, o3, o4, o8, halftone',
            // TODO Add radio/dropdown selector to setup
            write_to_config: SAVE_SETTINGS,
            allow_blank: false,
            fragile: true,
        }
    };

    configFilePath = File($.fileName).path + "/config.csv";
    config = initializeConfig(configFilePath, configDefinitions);

    if (!config) {
        createPromptWindow(errorText(), "Script initialization failed. Please try again!" + "\n", ["OK"], null);
        return;
    }

    var videoInput = promptForVideoInput();
    if (!videoInput) return; // Exit if no video input

    var outputDirectory = promptForOutputDirectory();
    if (!outputDirectory) {
        createPromptWindow(errorText(), "No seriously, where should we save these GIFS?" + "\n", ["OK"], null);
        return;
    }

    var inputFiles = videoInput instanceof Array ? videoInput : [videoInput];

    var commands = buildFFMPEGCommand(config.ffmpegPath, inputFiles, outputDirectory, config);
    executeFFMPEGCommand(commands, inputFiles, config);

    if (config.gifPaletteGen === 'true') {
        var paletteFile = new File(outputDirectory + "/palette.png");
        if (paletteFile.exists) {
            paletteFile.remove();
        }
    }

    // Optimize the output GIFs, optionally
    optimizeGIFs(config.gifsiclePath, outputDirectory, inputFiles, config);

    // Clean the config file, optionally
    cleanConfig(configFilePath, config, configDefinitions);

    var endTime = new Date().getTime();
    var totalDuration = (endTime - startTime) / 1000;
    var durationMinutes = Math.floor(totalDuration / 60);
    var durationSeconds = totalDuration % 60;

    successMessage = successText() + "\n\nVideo conversion to GIFs completed in " + durationMinutes + " minutes and " + durationSeconds.toFixed(2) + " seconds.\n\n";
}

main();

if (successMessage) {
    createPromptWindow(successText(), successMessage, ["Thank you!"], null, "Close");
    global_progress_window.window.update();
    global_progress_window.window.seppuku();
}
