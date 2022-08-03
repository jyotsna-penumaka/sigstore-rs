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

/// Tuf : TUF metadata

#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct Tuf {
    #[serde(rename = "kind")]
    pub kind: String,
    #[serde(rename = "apiVersion")]
    pub api_version: String,
    #[serde(rename = "spec")]
    pub spec: serde_json::Value,
}

impl Tuf {
    /// TUF metadata
    pub fn new(kind: String, api_version: String, spec: serde_json::Value) -> Tuf {
        Tuf {
            kind,
            api_version,
            spec,
        }
    }
}
