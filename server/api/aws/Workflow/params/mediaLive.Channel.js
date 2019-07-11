/* eslint-disable comma-dangle */
/* eslint-disable quote-props */

const s3_bucket = 'media-live-api';

const params = {
  Name: 'Media-live-API-CH-DEFAULT',
  RoleArn: 'arn:aws:iam::103365315157:role/MediaLiveAccessRole',
  InputAttachments: [{
    'InputId': '8983652',
    'InputSettings': {
      'SourceEndBehavior': 'CONTINUE',
      'NetworkInputSettings': {}
    }
  }],
  Destinations: [
    {
      "Id": "destination1",
      "Settings": [{
          "Url": 'https://0bdd660cacecc9b3.mediapackage.ap-southeast-2.amazonaws.com/in/v2/ec5fab7d912840f798b009fa170ee7fc/ec5fab7d912840f798b009fa170ee7fc/channel',
          "Username": 'd2a41f888cb44b74aa9bc2dfdcf2b053',
          "PasswordParam": '/api_medialive/destination1_a_HLS'
        },
        {
          "Url": 'https://0ac0d410a9bc2285.mediapackage.ap-southeast-2.amazonaws.com/in/v2/ec5fab7d912840f798b009fa170ee7fc/867864f79a904f1586949238b1b6c570/channel',
          "Username": 'cb17a139686641b98a9767c0a1d819e2',
          "PasswordParam": '/api_medialive/destination1_b_HLS'
        }
      ]
    },
    {
      "Id": "llmq8",
      "Settings": [{
          "Url": "s3://" + s3_bucket + "/live/stream",
          "Username": "",
          "PasswordParam": ""
        },
        {
          "Url": "s3://" + s3_bucket + "/live-backup/backup",
          "Username": "",
          "PasswordParam": ""
        }
      ]
    }
  ],
  EncoderSettings: {
    'TimecodeConfig': {
      'Source': 'SYSTEMCLOCK'
    },
    'OutputGroups': [{
      'OutputGroupSettings': {
        'HlsGroupSettings': {
          'TimedMetadataId3Frame': 'PRIV',
          'CaptionLanguageMappings': [],
          'Destination': {
            'DestinationRefId': 'destination1'
          },
          'IvSource': 'FOLLOWS_SEGMENT_NUMBER',
          'IndexNSegments': 6,
          'InputLossAction': 'EMIT_OUTPUT',
          'ManifestDurationFormat': 'FLOATING_POINT',
          'CodecSpecification': 'RFC_4281',
          'IvInManifest': 'INCLUDE',
          'TimedMetadataId3Period': 10,
          'ProgramDateTimePeriod': 600,
          'SegmentLength': 2,
          'CaptionLanguageSetting': 'OMIT',
          'ProgramDateTime': 'EXCLUDE',
          'HlsCdnSettings': {
            'HlsWebdavSettings': {
              'NumRetries': 10,
              'ConnectionRetryInterval': 1,
              'HttpTransferMode': 'NON_CHUNKED',
              'FilecacheDuration': 300,
              'RestartDelay': 15
            }
          },
          'TsFileMode': 'SEGMENTED_FILES',
          'StreamInfResolution': 'INCLUDE',
          'ClientCache': 'ENABLED',
          'AdMarkers': [
            'ELEMENTAL_SCTE35'
          ],
          'KeepSegments': 360,
          'SegmentationMode': 'USE_SEGMENT_DURATION',
          'OutputSelection': 'MANIFESTS_AND_SEGMENTS',
          'ManifestCompression': 'NONE',
          'DirectoryStructure': 'SINGLE_DIRECTORY',
          'Mode': 'LIVE'
        },
      },
      'Outputs': [{
        'VideoDescriptionName': 'video_1080p30',
        'AudioDescriptionNames': [
          'audio_1'
        ],
        'CaptionDescriptionNames': [],
        'OutputSettings': {
          'HlsOutputSettings': {
            'NameModifier': '_1080p30',
            'HlsSettings': {
              'StandardHlsSettings': {
                'M3u8Settings': {
                  'PcrControl': 'PCR_EVERY_PES_PACKET',
                  'TimedMetadataBehavior': 'NO_PASSTHROUGH',
                  'PmtPid': '480',
                  'Scte35Pid': '500',
                  'VideoPid': '481',
                  'ProgramNum': 1,
                  'AudioPids': '492-498',
                  'AudioFramesPerPes': 4,
                  'EcmPid': '8182',
                  'Scte35Behavior': 'PASSTHROUGH'
                },
                'AudioRenditionSets': 'PROGRAM_AUDIO'
              }
            }
          }
        }
      },
        {
          'VideoDescriptionName': 'video_720p30',
          'AudioDescriptionNames': [
            'audio_2'
          ],
          'CaptionDescriptionNames': [],
          'OutputSettings': {
            'HlsOutputSettings': {
              'NameModifier': '_720p30',
              'HlsSettings': {
                'StandardHlsSettings': {
                  'M3u8Settings': {
                    'PcrControl': 'PCR_EVERY_PES_PACKET',
                    'TimedMetadataBehavior': 'NO_PASSTHROUGH',
                    'PmtPid': '480',
                    'Scte35Pid': '500',
                    'VideoPid': '481',
                    'ProgramNum': 1,
                    'AudioPids': '492-498',
                    'AudioFramesPerPes': 4,
                    'EcmPid': '8182',
                    'Scte35Behavior': 'PASSTHROUGH'
                  },
                  'AudioRenditionSets': 'PROGRAM_AUDIO'
                }
              }
            }
          }
        },
        {
          'VideoDescriptionName': 'video_480p30',
          'AudioDescriptionNames': [
            'audio_za9dzo'
          ],
          'CaptionDescriptionNames': [],
          'OutputSettings': {
            'HlsOutputSettings': {
              'NameModifier': '_480p30',
              'HlsSettings': {
                'StandardHlsSettings': {
                  'M3u8Settings': {
                    'PcrControl': 'PCR_EVERY_PES_PACKET',
                    'TimedMetadataBehavior': 'NO_PASSTHROUGH',
                    'PmtPid': '480',
                    'Scte35Pid': '500',
                    'VideoPid': '481',
                    'ProgramNum': 1,
                    'AudioPids': '492-498',
                    'AudioFramesPerPes': 4,
                    'EcmPid': '8182',
                    'Scte35Behavior': 'PASSTHROUGH'
                  },
                  'AudioRenditionSets': 'PROGRAM_AUDIO'
                }
              }
            }
          }
        },
        {
          'VideoDescriptionName': 'video_240p30',
          'AudioDescriptionNames': [
            'audio_40bxb2'
          ],
          'CaptionDescriptionNames': [],
          'OutputSettings': {
            'HlsOutputSettings': {
              'NameModifier': '_270p30',
              'HlsSettings': {
                'StandardHlsSettings': {
                  'M3u8Settings': {
                    'PcrControl': 'PCR_EVERY_PES_PACKET',
                    'TimedMetadataBehavior': 'NO_PASSTHROUGH',
                    'PmtPid': '480',
                    'Scte35Pid': '500',
                    'VideoPid': '481',
                    'ProgramNum': 1,
                    'AudioPids': '492-498',
                    'AudioFramesPerPes': 4,
                    'EcmPid': '8182',
                    'Scte35Behavior': 'PASSTHROUGH'
                  },
                  'AudioRenditionSets': 'PROGRAM_AUDIO'
                }
              }
            }
          }
        }
        ],
      'Name': 'MediaPackage'
    },
      {
        'OutputGroupSettings': {
          'HlsGroupSettings': {
            'TimedMetadataId3Frame': 'PRIV',
            'CaptionLanguageMappings': [],
            'Destination': {
              'DestinationRefId': 'llmq8'
            },
            'IvSource': 'FOLLOWS_SEGMENT_NUMBER',
            'IndexNSegments': 7,
            'InputLossAction': 'EMIT_OUTPUT',
            'ManifestDurationFormat': 'FLOATING_POINT',
            'CodecSpecification': 'RFC_4281',
            'IvInManifest': 'INCLUDE',
            'TimedMetadataId3Period': 10,
            'ProgramDateTimePeriod': 10,
            'SegmentLength': 10,
            'CaptionLanguageSetting': 'OMIT',
            'ProgramDateTime': 'INCLUDE',
            'Mode': 'LIVE',
            'TsFileMode': 'SEGMENTED_FILES',
            'StreamInfResolution': 'INCLUDE',
            'ClientCache': 'ENABLED',
            'AdMarkers': [],
            'KeepSegments': 40,
            'SegmentationMode': 'USE_SEGMENT_DURATION',
            'OutputSelection': 'MANIFESTS_AND_SEGMENTS',
            'ManifestCompression': 'NONE',
            'DirectoryStructure': 'SINGLE_DIRECTORY'
          }
        },
        'Outputs': [{
          'OutputName': 'vf6z8',
          'AudioDescriptionNames': [
            'audio_f42hdc'
          ],
          'CaptionDescriptionNames': [],
          'VideoDescriptionName': 'video_tikzx7',
          'OutputSettings': {
            'HlsOutputSettings': {
              'SegmentModifier': '$dt$',
              'NameModifier': '_1',
              'HlsSettings': {
                'StandardHlsSettings': {
                  'M3u8Settings': {
                    'PcrControl': 'PCR_EVERY_PES_PACKET',
                    'TimedMetadataBehavior': 'NO_PASSTHROUGH',
                    'PmtPid': '480',
                    'Scte35Pid': '500',
                    'VideoPid': '481',
                    'ProgramNum': 1,
                    'AudioPids': '492-498',
                    'AudioFramesPerPes': 4,
                    'EcmPid': '8182',
                    'Scte35Behavior': 'NO_PASSTHROUGH'
                  },
                  'AudioRenditionSets': 'PROGRAM_AUDIO'
                }
              }
            }
          }
        }],
        'Name': 'S3 Bucket'
      }
    ],
    'GlobalConfiguration': {
      'SupportLowFramerateInputs': 'DISABLED',
      'OutputTimingSource': 'SYSTEM_CLOCK',
      'InputEndAction': 'SWITCH_AND_LOOP_INPUTS'
    },
    'CaptionDescriptions': [],
    'VideoDescriptions': [{
      'CodecSettings': {
        'H264Settings': {
          'Syntax': 'DEFAULT',
          'FramerateNumerator': 30000,
          'Profile': 'HIGH',
          'GopSize': 2,
          'AfdSignaling': 'NONE',
          'FramerateControl': 'SPECIFIED',
          'ColorMetadata': 'INSERT',
          'FlickerAq': 'ENABLED',
          'LookAheadRateControl': 'HIGH',
          'FramerateDenominator': 1001,
          'Bitrate': 5000000,
          'TimecodeInsertion': 'PIC_TIMING_SEI',
          'NumRefFrames': 3,
          'EntropyEncoding': 'CABAC',
          'GopSizeUnits': 'SECONDS',
          'Level': 'H264_LEVEL_AUTO',
          'GopBReference': 'ENABLED',
          'AdaptiveQuantization': 'HIGH',
          'GopNumBFrames': 3,
          'ScanType': 'PROGRESSIVE',
          'ParControl': 'INITIALIZE_FROM_SOURCE',
          'Slices': 1,
          'SpatialAq': 'ENABLED',
          'TemporalAq': 'ENABLED',
          'RateControlMode': 'CBR',
          'SceneChangeDetect': 'ENABLED',
          'GopClosedCadence': 1
        }
      },
      'Name': 'video_1080p30',
      'Sharpness': 50,
      'Height': 1080,
      'Width': 1920,
      'ScalingBehavior': 'DEFAULT',
      'RespondToAfd': 'NONE'
    },
      {
        'CodecSettings': {
          'H264Settings': {
            'Syntax': 'DEFAULT',
            'FramerateNumerator': 30000,
            'Profile': 'HIGH',
            'GopSize': 2,
            'AfdSignaling': 'NONE',
            'FramerateControl': 'SPECIFIED',
            'ColorMetadata': 'INSERT',
            'FlickerAq': 'ENABLED',
            'LookAheadRateControl': 'HIGH',
            'FramerateDenominator': 1001,
            'Bitrate': 3000000,
            'TimecodeInsertion': 'PIC_TIMING_SEI',
            'NumRefFrames': 3,
            'EntropyEncoding': 'CABAC',
            'GopSizeUnits': 'SECONDS',
            'Level': 'H264_LEVEL_AUTO',
            'GopBReference': 'ENABLED',
            'AdaptiveQuantization': 'HIGH',
            'GopNumBFrames': 3,
            'ScanType': 'PROGRESSIVE',
            'ParControl': 'INITIALIZE_FROM_SOURCE',
            'Slices': 1,
            'SpatialAq': 'ENABLED',
            'TemporalAq': 'ENABLED',
            'RateControlMode': 'CBR',
            'SceneChangeDetect': 'ENABLED',
            'GopClosedCadence': 1
          }
        },
        'Name': 'video_720p30',
        'Sharpness': 100,
        'Height': 720,
        'Width': 1280,
        'ScalingBehavior': 'DEFAULT',
        'RespondToAfd': 'NONE'
      },
      {
        'CodecSettings': {
          'H264Settings': {
            'Syntax': 'DEFAULT',
            'FramerateNumerator': 30000,
            'Profile': 'MAIN',
            'GopSize': 2,
            'AfdSignaling': 'NONE',
            'FramerateControl': 'SPECIFIED',
            'ColorMetadata': 'INSERT',
            'FlickerAq': 'ENABLED',
            'LookAheadRateControl': 'HIGH',
            'FramerateDenominator': 1001,
            'Bitrate': 1500000,
            'TimecodeInsertion': 'PIC_TIMING_SEI',
            'NumRefFrames': 3,
            'EntropyEncoding': 'CABAC',
            'GopSizeUnits': 'SECONDS',
            'Level': 'H264_LEVEL_AUTO',
            'GopBReference': 'ENABLED',
            'AdaptiveQuantization': 'HIGH',
            'GopNumBFrames': 3,
            'ScanType': 'PROGRESSIVE',
            'ParControl': 'INITIALIZE_FROM_SOURCE',
            'Slices': 1,
            'SpatialAq': 'ENABLED',
            'TemporalAq': 'ENABLED',
            'RateControlMode': 'CBR',
            'SceneChangeDetect': 'ENABLED',
            'GopClosedCadence': 1
          }
        },
        'Name': 'video_480p30',
        'Sharpness': 100,
        'Height': 480,
        'Width': 854,
        'ScalingBehavior': 'STRETCH_TO_OUTPUT',
        'RespondToAfd': 'NONE'
      },
      {
        'CodecSettings': {
          'H264Settings': {
            'Syntax': 'DEFAULT',
            'FramerateNumerator': 30000,
            'Profile': 'MAIN',
            'GopSize': 2,
            'AfdSignaling': 'NONE',
            'FramerateControl': 'SPECIFIED',
            'ColorMetadata': 'INSERT',
            'FlickerAq': 'ENABLED',
            'LookAheadRateControl': 'HIGH',
            'FramerateDenominator': 1001,
            'Bitrate': 750000,
            'TimecodeInsertion': 'PIC_TIMING_SEI',
            'NumRefFrames': 3,
            'EntropyEncoding': 'CABAC',
            'GopSizeUnits': 'SECONDS',
            'Level': 'H264_LEVEL_AUTO',
            'GopBReference': 'ENABLED',
            'AdaptiveQuantization': 'HIGH',
            'GopNumBFrames': 3,
            'ScanType': 'PROGRESSIVE',
            'ParControl': 'INITIALIZE_FROM_SOURCE',
            'Slices': 1,
            'SpatialAq': 'ENABLED',
            'TemporalAq': 'ENABLED',
            'RateControlMode': 'CBR',
            'SceneChangeDetect': 'ENABLED',
            'GopClosedCadence': 1
          }
        },
        'Name': 'video_240p30',
        'Sharpness': 100,
        'Height': 270,
        'Width': 480,
        'ScalingBehavior': 'STRETCH_TO_OUTPUT',
        'RespondToAfd': 'NONE'
      },
      {
        'CodecSettings': {
          'H264Settings': {
            'Syntax': 'DEFAULT',
            'Profile': 'MAIN',
            'GopSize': 2,
            'AfdSignaling': 'NONE',
            'FramerateControl': 'SPECIFIED',
            'FramerateNumerator': 30000,
            'FramerateDenominator': 1001,
            'ColorMetadata': 'INSERT',
            'FlickerAq': 'ENABLED',
            'LookAheadRateControl': 'MEDIUM',
            'Bitrate': 2000000,
            'TimecodeInsertion': 'PIC_TIMING_SEI',
            'NumRefFrames': 1,
            'EntropyEncoding': 'CABAC',
            'GopSizeUnits': 'SECONDS',
            'Level': 'H264_LEVEL_AUTO',
            'GopBReference': 'DISABLED',
            'AdaptiveQuantization': 'MEDIUM',
            'GopNumBFrames': 0,
            'ScanType': 'PROGRESSIVE',
            'ParControl': 'INITIALIZE_FROM_SOURCE',
            'SpatialAq': 'ENABLED',
            'TemporalAq': 'ENABLED',
            'RateControlMode': 'CBR',
            'SceneChangeDetect': 'ENABLED',
            'GopClosedCadence': 1
          }
        },
        'Name': 'video_tikzx7',
        'Sharpness': 50,
        'Height': 540,
        'Width': 960,
        'ScalingBehavior': 'DEFAULT',
        'RespondToAfd': 'NONE'
      }
    ],
    'AudioDescriptions': [{
      'CodecSettings': {
        'AacSettings': {
          'Profile': 'LC',
          'InputType': 'NORMAL',
          'RateControlMode': 'CBR',
          'Spec': 'MPEG4',
          'SampleRate': 48000,
          'Bitrate': 128000,
          'CodingMode': 'CODING_MODE_2_0',
          'RawFormat': 'NONE'
        }
      },
      'LanguageCode': 'eng',
      'AudioSelectorName': 'Default',
      'LanguageCodeControl': 'USE_CONFIGURED',
      'AudioTypeControl': 'USE_CONFIGURED',
      'AudioType': 'UNDEFINED',
      'Name': 'audio_1'
    },
      {
        'CodecSettings': {
          'AacSettings': {
            'Profile': 'LC',
            'InputType': 'NORMAL',
            'RateControlMode': 'CBR',
            'Spec': 'MPEG4',
            'SampleRate': 48000,
            'Bitrate': 128000,
            'CodingMode': 'CODING_MODE_2_0',
            'RawFormat': 'NONE'
          }
        },
        'LanguageCode': 'eng',
        'AudioSelectorName': 'Default',
        'Name': 'audio_2',
        'LanguageCodeControl': 'USE_CONFIGURED',
        'AudioTypeControl': 'USE_CONFIGURED',
        'AudioType': 'UNDEFINED'
      },
      {
        'CodecSettings': {
          'AacSettings': {
            'Profile': 'LC',
            'InputType': 'NORMAL',
            'RateControlMode': 'CBR',
            'Spec': 'MPEG4',
            'SampleRate': 48000,
            'Bitrate': 192000,
            'CodingMode': 'CODING_MODE_2_0',
            'RawFormat': 'NONE'
          }
        },
        'LanguageCode': 'eng',
        'AudioSelectorName': 'Default',
        'Name': 'audio_za9dzo',
        'LanguageCodeControl': 'USE_CONFIGURED',
        'AudioTypeControl': 'USE_CONFIGURED',
        'AudioType': 'UNDEFINED'
      },
      {
        'CodecSettings': {
          'AacSettings': {
            'Profile': 'LC',
            'InputType': 'NORMAL',
            'RateControlMode': 'CBR',
            'Spec': 'MPEG4',
            'SampleRate': 48000,
            'Bitrate': 192000,
            'CodingMode': 'CODING_MODE_2_0',
            'RawFormat': 'NONE'
          }
        },
        'LanguageCode': 'eng',
        'AudioSelectorName': 'Default',
        'Name': 'audio_40bxb2',
        'LanguageCodeControl': 'USE_CONFIGURED',
        'AudioTypeControl': 'USE_CONFIGURED',
        'AudioType': 'UNDEFINED'
      },
      {
        'CodecSettings': {
          'AacSettings': {
            'Profile': 'LC',
            'InputType': 'NORMAL',
            'RateControlMode': 'CBR',
            'Spec': 'MPEG4',
            'SampleRate': 48000,
            'Bitrate': 192000,
            'CodingMode': 'CODING_MODE_2_0',
            'RawFormat': 'NONE'
          }
        },
        'LanguageCodeControl': 'FOLLOW_INPUT',
        'AudioSelectorName': 'Default',
        'AudioTypeControl': 'FOLLOW_INPUT',
        'Name': 'audio_f42hdc'
      }
    ]
  }
};

export default params;
