/*
 * Rekor
 *
 * Rekor is a cryptographically secure, immutable transparency log for signed software releases.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * Generated by: https://openapi-generator.tech
 */

use serde::{Serialize, Deserialize};

/// Rpm : RPM package

#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct Rpm {
    #[serde(rename = "kind")]
    pub kind: String,
    #[serde(rename = "apiVersion")]
    pub api_version: String,
    #[serde(rename = "spec")]
    pub spec: serde_json::Value,
}

impl Rpm {
    /// RPM package
    pub fn new(kind: String, api_version: String, spec: serde_json::Value) -> Rpm {
        Rpm {
            kind,
            api_version,
            spec,
        }
    }
}
